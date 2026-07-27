import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Hasta ahora surlabs.tech/robots.txt daba 404. No es fatal, porque sin
 * robots.txt se rastrea todo igual, pero sí deja sin declarar el sitemap y sin
 * decirle nada a los rastreadores de IA.
 *
 * Se permite todo a propósito, incluidos GPTBot (ChatGPT), PerplexityBot,
 * ClaudeBot y Google-Extended (respuestas con IA de Google). Bloquearlos es lo
 * que hace un medio que vive de sus visitas; acá el negocio es al revés: que un
 * asistente conteste "¿quién hace sistemas de reservas en Montevideo?" y nos
 * nombre vale más que la visita que nos ahorramos.
 *
 * Las rutas /ev/ no existen como páginas: son las vistas sintéticas con las que
 * medimos conversiones (ver src/lib/track.ts). Nunca se navega a ellas, pero se
 * excluyen por si alguna termina en un registro público.
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: "/ev/",
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}
