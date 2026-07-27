import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * El sitio es una sola página, así que el sitemap tiene una sola entrada. Aun
 * así vale la pena: sin él, surlabs.tech/sitemap.xml daba 404 y Search Console
 * no tiene qué enviar.
 *
 * Las demos NO van acá. Viven en demos.surlabs.tech, que es otro dominio, y un
 * sitemap solo puede declarar URLs de su propio host.
 */
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}
