/**
 * Las 12 demos publicadas en demos.surlabs.tech.
 *
 * IMPORTANTE: cada entrada necesita que exista la ruta /ejemploN en el repo
 * hermano surlabs-demos, y su captura en public/demos/. Las capturas se
 * regeneran con Chrome headless, ver CLAUDE.md.
 */
export interface Demo {
    id: string;
    title: string;
    description: string;
    /** Rubro al que le habla. Es lo que el visitante busca, no la tecnología. */
    sector: string;
    url: string;
    image: string;
}

export const demos: Demo[] = [
    {
        id: "ejemplo12",
        title: "Restaurante de autor",
        description: "Carta digital con categorías, reseñas y reservas.",
        sector: "Gastronomía",
        url: "https://demos.surlabs.tech/ejemplo12",
        image: "/demos/ejemplo12.webp",
    },
    {
        id: "ejemplo5",
        title: "Agenda inteligente",
        description: "Reservas y calendario para negocios de servicios.",
        sector: "Servicios",
        url: "https://demos.surlabs.tech/ejemplo5",
        image: "/demos/ejemplo5.webp",
    },
    {
        id: "ejemplo1",
        title: "Gestión comercial y CRM",
        description: "Panel de métricas de ventas y operaciones.",
        sector: "Comercial",
        url: "https://demos.surlabs.tech/ejemplo1",
        image: "/demos/ejemplo1.webp",
    },
    {
        id: "ejemplo2",
        title: "E-commerce de lujo",
        description: "Tienda online enfocada en cerrar la venta.",
        sector: "Retail",
        url: "https://demos.surlabs.tech/ejemplo2",
        image: "/demos/ejemplo2.webp",
    },
    {
        id: "ejemplo6",
        title: "Tienda gastronómica",
        description: "Menú, carrusel y club de beneficios en una sola página.",
        sector: "Gastronomía",
        url: "https://demos.surlabs.tech/ejemplo6",
        image: "/demos/ejemplo6.webp",
    },
    {
        id: "ejemplo8",
        title: "Portal inmobiliario",
        description: "Propiedades con filtros, favoritos y galería.",
        sector: "Inmobiliaria",
        url: "https://demos.surlabs.tech/ejemplo8",
        image: "/demos/ejemplo8.webp",
    },
    {
        id: "ejemplo7",
        title: "Operaciones con IA",
        description: "Asistente, automatizaciones y métricas en vivo.",
        sector: "Automatización",
        url: "https://demos.surlabs.tech/ejemplo7",
        image: "/demos/ejemplo7.webp",
    },
    {
        id: "ejemplo10",
        title: "App de fitness",
        description: "Rutinas, métricas y seguimiento, pensada para el teléfono.",
        sector: "Wellness",
        url: "https://demos.surlabs.tech/ejemplo10",
        image: "/demos/ejemplo10.webp",
    },
    {
        id: "ejemplo11",
        title: "Plataforma de cursos",
        description: "Campus con progreso, gamificación y contenido.",
        sector: "Educación",
        url: "https://demos.surlabs.tech/ejemplo11",
        image: "/demos/ejemplo11.webp",
    },
    {
        id: "ejemplo4",
        title: "Menú arcade",
        description: "Carta interactiva con estética retro para captar público joven.",
        sector: "Gastronomía",
        url: "https://demos.surlabs.tech/ejemplo4",
        image: "/demos/ejemplo4.webp",
    },
    {
        id: "ejemplo3",
        title: "Agencia creativa",
        description: "Portfolio con diseño brutalista y animaciones.",
        sector: "Estudio",
        url: "https://demos.surlabs.tech/ejemplo3",
        image: "/demos/ejemplo3.webp",
    },
    {
        id: "ejemplo9",
        title: "Landing de producto",
        description: "Precios, funciones y testimonios en una sola pantalla.",
        sector: "Software",
        url: "https://demos.surlabs.tech/ejemplo9",
        image: "/demos/ejemplo9.webp",
    },
];

/** Número real de WhatsApp. Único canal de conversión del sitio. */
export const WHATSAPP_NUMBER = "59891519293";
export const WHATSAPP_DISPLAY = "+598 91 519 293";
export const CONTACT_EMAIL = "hola@surlabs.tech";
