/**
 * Datos del sitio y del negocio. Los consumen las metaetiquetas, el sitemap,
 * el robots.txt y los datos estructurados, así que viven en un solo lugar.
 *
 * OJO CON EL DOMINIO: el sitio se sirve en www.surlabs.tech. El dominio sin
 * www redirige ahí, así que la versión con www es la canónica y es la que va
 * en todos lados. Si algún día se da vuelta la preferencia en el panel de
 * Vercel, se cambia SITE_URL acá y se arrastra todo solo.
 */
export const SITE_URL = "https://www.surlabs.tech";

export const SITE_NAME = "Surlabs";

/** Lo que hacemos, en las palabras con las que lo busca un dueño de negocio. */
export const SITE_DESCRIPTION =
    "Desarrollo de software a medida en Montevideo, Uruguay. Sistemas de reservas y turnos, cartas y catálogos digitales, paneles de gestión y páginas web para comercios y pymes.";

/** Perfiles públicos. Sirven para que los buscadores asocien la entidad. */
export const SOCIAL_PROFILES = ["https://www.instagram.com/surlabs.tech"];

/** Rubros a los que le hablamos, en el orden en que los busca la gente. */
export const SERVICES = [
    {
        name: "Sistemas de reservas y turnos",
        description:
            "Agenda online para que el cliente reserve solo, con confirmaciones y recordatorios automáticos.",
    },
    {
        name: "Cartas y catálogos digitales",
        description:
            "Menú o catálogo que se actualiza sin depender de nadie y toma pedidos sin ida y vuelta por WhatsApp.",
    },
    {
        name: "Paneles de gestión y CRM",
        description:
            "El reemplazo de la planilla: clientes, stock y ventas en un lugar que puede mirar todo el equipo.",
    },
    {
        name: "Páginas web para comercios y pymes",
        description:
            "Sitios pensados para captar clientes, no para quedar lindos y no traer a nadie.",
    },
];
