import { faq } from "@/lib/faq";
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from "@/lib/demos";
import {
    SERVICES,
    SITE_DESCRIPTION,
    SITE_NAME,
    SITE_URL,
    SOCIAL_PROFILES,
} from "@/lib/site";

/**
 * Datos estructurados (JSON-LD). El sitio no tenía ninguno.
 *
 * Sirven para dos cosas distintas que conviene no mezclar:
 *
 * 1. Que Google entienda que Surlabs es UNA ENTIDAD: un negocio de desarrollo
 *    de software, en Montevideo, con estos servicios y este contacto. Sin esto
 *    somos una página suelta sin identidad asociada a un lugar ni a un rubro.
 * 2. Que los asistentes de IA tengan las preguntas y respuestas en un formato
 *    que puedan citar sin tener que interpretar el diseño.
 *
 * SOBRE LA DIRECCIÓN: se declara solo la ciudad y el país, sin calle, porque no
 * hay una dirección pública verificable y schema.org no la exige. Sin calle
 * Google no va a dar el resultado enriquecido de negocio local, y eso está
 * asumido: el camino real para búsquedas tipo "software Montevideo" es dar de
 * alta el Perfil de Empresa de Google, que es gratis y no depende de este
 * archivo. Nunca poner una dirección inventada para forzar el resultado.
 */

const ORG_ID = `${SITE_URL}/#organizacion`;

function organization() {
    return {
        "@type": "ProfessionalService",
        "@id": ORG_ID,
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        image: `${SITE_URL}/opengraph-image`,
        logo: `${SITE_URL}/icon.svg`,
        email: CONTACT_EMAIL,
        telephone: `+${WHATSAPP_NUMBER}`,
        address: {
            "@type": "PostalAddress",
            addressLocality: "Montevideo",
            addressCountry: "UY",
        },
        areaServed: { "@type": "Country", name: "Uruguay" },
        knowsLanguage: ["es"],
        sameAs: SOCIAL_PROFILES,
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Desarrollo de software a medida",
            itemListElement: SERVICES.map((s) => ({
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: s.name,
                    description: s.description,
                },
            })),
        },
    };
}

function website() {
    return {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#sitio`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "es",
        publisher: { "@id": ORG_ID },
    };
}

function faqPage() {
    return {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#preguntas`,
        // Idénticas a lo que se ve en pantalla. Si divergen, es penalizable.
        mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
    };
}

/**
 * Un solo bloque con @graph en vez de tres etiquetas sueltas: así los nodos se
 * referencian entre sí por @id y los buscadores los leen como una sola entidad
 * en lugar de como tres cosas que casualmente están en la misma página.
 */
export function siteSchema() {
    return {
        "@context": "https://schema.org",
        "@graph": [organization(), website(), faqPage()],
    };
}
