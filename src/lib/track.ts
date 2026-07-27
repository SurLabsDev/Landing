/**
 * Medición de conversiones sobre Vercel Web Analytics, plan Hobby.
 *
 * EL PROBLEMA
 * Vercel bloquea los eventos personalizados en el plan gratuito: en su tabla de
 * precios la fila "Custom Events" figura como "-" para Hobby. O sea que la
 * función `track()` de @vercel/analytics no nos sirve. Lo único que el plan
 * gratuito cuenta son vistas de página, y este sitio es una sola página: todo el
 * mundo aparece en "/" y no se distingue a quien abrió una demo de quien pasó de
 * largo.
 *
 * LA SOLUCIÓN
 * Emitir vistas de página sintéticas. `window.va("pageview", { route, path })`
 * es exactamente la llamada que hace el componente oficial de Vercel para Next
 * en cada cambio de ruta (está en @vercel/analytics/dist/next/index.mjs), así
 * que no es un truco por afuera de la librería: es su propio camino de código.
 * Le pasamos una ruta inventada y el panel la muestra como una fila más junto
 * a "/", con su cuenta de visitas.
 *
 * Nadie navega a ningún lado: no hay redirección, ni página intermedia, ni
 * demora antes de abrir WhatsApp. Es la única forma de medir esto en el plan
 * gratuito sin pagarlo con experiencia de uso.
 *
 * Descartada a propósito: rutas reales tipo /ir/whatsapp que redirigen. La
 * medición de Vercel corre en el navegador, y en una redirección del servidor
 * el navegador nunca llega a pintar HTML en esa ruta, así que el script no
 * carga y no se cuenta nada. La variante que sí funcionaría (una página real
 * que carga y después salta) le mete un parpadeo y medio segundo al camino más
 * importante del sitio.
 *
 * CUOTA
 * Hobby da 50.000 eventos por mes y cada vista, real o sintética, gasta uno.
 * Con la instrumentación de acá una visita normal gasta 5 (la vista real más
 * las 4 secciones alcanzadas), así que el techo está cerca de las 10.000
 * visitas mensuales. Pasado el límite Vercel no cobra: frena la recolección
 * unos días. Si el sitio llegara a ese tráfico, lo primero que hay que recortar
 * son los eventos de sección.
 */

/** Prefijo de toda ruta sintética. No existe como página, y así se ve. */
const PREFIX = "/ev";

/**
 * Nombres de evento. Están en inglés como el resto del código, en minúscula y
 * jerárquicos, porque el panel de Vercel ordena las rutas alfabéticamente y así
 * las 12 demos quedan juntas, los CTA juntos y los contactos juntos.
 *
 * Son la clave con la que vas a leer los números dentro de un mes. Si cambiás
 * uno, la serie vieja queda huérfana con el nombre anterior.
 */
export const EV = {
    /**
     * Salidas a WhatsApp, que es la única conversión real del sitio.
     *
     * OJO AL LEER LOS NÚMEROS: waForm cuenta INTENTOS, porque se dispara antes
     * de abrir la ventana. Los envíos que de verdad llegaron son
     * `wa/form - wa/blocked + wa/recovered`.
     */
    waForm: "wa/form",
    waContact: "wa/contact",
    waFooter: "wa/footer",
    /** El navegador bloqueó la ventana emergente y hubo que ofrecer el enlace. */
    waBlocked: "wa/blocked",
    /** Y el visitante usó ese enlace, o sea que el lead no se perdió. */
    waRecovered: "wa/recovered",

    mailContact: "mail/contact",
    mailFooter: "mail/footer",

    /** Botones que llevan al formulario. Dicen qué parte de la página convence. */
    ctaHeader: "cta/header",
    ctaMenu: "cta/menu",
    ctaHero: "cta/hero",
    ctaServices: "cta/services",
    ctaWork: "cta/work",

    /** El visitante movió la galería con la mano en vez de mirarla pasar. */
    galleryUsed: "gallery/used",
} as const;

/** Apertura de una demo. `id` es el de src/lib/demos.ts, por ejemplo ejemplo12. */
export const evDemo = (id: string) => `demo/${id}`;

/** Sección a la que llegó bajando. Sirve como embudo de lectura. */
export const evReach = (section: string) => `reach/${section}`;

/**
 * De dónde vino la visita, leído de ?utm_source= en la URL.
 *
 * Vercel tiene desglose por UTM, pero también está bloqueado en Hobby: pide el
 * complemento Web Analytics Plus. Y el desglose por referente, que sí está
 * disponible, no alcanza para lo nuestro: los navegadores internos de Instagram
 * y WhatsApp suelen borrar el referente, que es justo de donde va a venir casi
 * todo el tráfico. Así que la fuente también se registra como vista sintética.
 *
 * Etiquetá los enlaces así:
 *   biografía de Instagram   https://surlabs.tech/?utm_source=instagram
 *   historia con enlace      https://surlabs.tech/?utm_source=historia
 *   publicidad paga          https://surlabs.tech/?utm_source=pauta
 *   firma del correo         https://surlabs.tech/?utm_source=correo
 *
 * El valor se limpia a [a-z0-9-] y se corta a 24 caracteres: acota cuántas
 * filas distintas puede llegar a crear alguien escribiendo cualquier cosa en la
 * dirección, y evita que un valor raro invente rutas dentro del panel.
 */
export function evSource(raw: string): string | null {
    const clean = raw.toLowerCase().replace(/[^a-z0-9-]/g, "").slice(0, 24);
    return clean ? `from/${clean}` : null;
}

/**
 * Deja lista la cola de Vercel si todavía no existe.
 *
 * El script real tarda en cargar, así que el paquete encola las llamadas en
 * `window.vaq` y las vacía cuando llega. Arrancamos esa cola nosotros por un
 * motivo concreto: un evento que ocurre en el montaje, como el de la fuente de
 * la visita, corre antes que el efecto de <Analytics /> y se perdía entero.
 * Es el mismo arranque que hace @vercel/analytics, y su initQueue respeta la
 * cola que ya esté puesta, así que no se pisan.
 */
function ensureQueue(): void {
    if (window.va) return;
    window.va = (event, properties) => {
        (window.vaq ||= []).push([event, properties]);
    };
}

/**
 * Registra una vista sintética.
 *
 * Silenciosa a propósito: si un bloqueador frenó el script o el visitante
 * navega sin JavaScript, esto no hace nada. Medir nunca puede romper el camino
 * de la conversión.
 */
export function trackEvent(name: string): void {
    if (typeof window === "undefined") return;
    ensureQueue();
    const path = `${PREFIX}/${name}`;
    // route y path van iguales para que cada evento sea su propia fila. Si
    // fueran distintos, Vercel agruparía por route y habría que abrir el
    // detalle para ver cuál demo se llevó los clics.
    window.va?.("pageview", { route: path, path });
}
