/**
 * Las preguntas frecuentes.
 *
 * Fuente única: de acá salen tanto la sección visible como los datos
 * estructurados de FAQPage. No pueden divergir. Google exige que el contenido
 * del schema esté visible en la página, y marcar respuestas que el visitante no
 * ve es motivo de penalización manual.
 *
 * POR QUÉ ESTA SECCIÓN EXISTE
 * El sitio tenía 505 palabras y ningún encabezado con una palabra que alguien
 * busque. Las preguntas son el único formato que resuelve las dos cosas a la
 * vez: le hablan al visitante en su idioma real y le dan a los buscadores y a
 * los asistentes de IA pasajes autocontenidos para citar.
 *
 * Las preguntas salen de las objeciones reales de .agents/product-marketing.md,
 * no de una lista genérica. Las respuestas rondan las 50 palabras, que es el
 * largo que mejor se extrae como fragmento.
 *
 * REGLA AL EDITAR: ningún número inventado. No hay precios ni plazos porque
 * todavía no hay una política pública de precios; cuando la haya, la primera
 * respuesta es la que tiene que cambiar, y va a ser la que más rinda.
 */
export interface FaqItem {
    question: string;
    answer: string;
}

export const faq: FaqItem[] = [
    {
        question: "¿Cuánto sale un sistema a medida?",
        answer:
            "Depende del alcance: no es lo mismo una agenda de turnos que un panel de gestión completo. Por eso antes de empezar te pasamos qué se hace, cuánto sale y cuándo está, por escrito. La primera charla no te compromete a nada.",
    },
    {
        question: "¿Cuánto tarda en estar funcionando?",
        answer:
            "También depende del alcance, y te lo decimos por escrito junto con el precio. Lo que hacemos siempre es lanzar primero una versión que ya te sirva y seguir ajustándola con vos usándola, en vez de tenerte meses esperando algo que todavía no viste.",
    },
    {
        question: "¿Trabajan solo en Montevideo?",
        answer:
            "Estamos en Montevideo y trabajamos con negocios de todo Uruguay. Buena parte del proceso es remoto, así que la distancia no cambia el precio ni el plazo. Si estás en Montevideo y preferís que nos veamos en persona para arrancar, también.",
    },
    {
        question: "¿Después puedo cambiar los contenidos yo?",
        answer:
            "Sí. Donde tiene sentido te lo entregamos autogestionable: precios, fotos, platos, propiedades o lo que tu negocio cambie seguido lo editás vos, sin escribirnos y sin pagar por cada cambio. Si algo va a quedar fuera de tu alcance te lo decimos antes, no después.",
    },
    {
        question: "Ya tengo Instagram, ¿para qué quiero una página web?",
        answer:
            "Instagram sirve para que te conozcan, pero no toma reservas, no cobra, no ordena tu stock y no te deja encontrar un pedido de hace tres meses. Una web propia hace el trabajo que hoy hacés vos a mano, contestando mensajes de a uno.",
    },
    {
        question: "¿Pueden retomar algo que empezó otro proveedor?",
        answer:
            "Sí, es buena parte de lo que hacemos. No hace falta tirar todo y empezar de cero: lo que está bien hecho se aprovecha y lo que no, se reemplaza. Mandanos el enlace y te decimos qué tiene, sin costo. Si conviene rehacerlo, también te lo decimos.",
    },
    {
        question: "¿Cómo sé que van a entender mi rubro?",
        answer:
            "No te lo contamos, te lo mostramos. Hay doce productos funcionando y abiertos, de gastronomía, salud, inmobiliaria, comercio, gimnasios y cursos. Entrá al que se parezca a lo tuyo y usalo como si fuera tuyo antes de escribirnos.",
    },
];
