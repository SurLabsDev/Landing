import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import { Metrics } from "@/components/ui/Metrics";
import { siteSchema } from "@/lib/schema";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

/**
 * Bricolage es variable en tres ejes. Pedimos wdth y opsz además del peso
 * porque el carácter de los titulares sale del ancho condensado, no del peso.
 */
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  axes: ["opsz", "wdth"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

/*
  El título lleva "en Montevideo" porque es una búsqueda local: alguien que
  escribe "desarrollo de software Montevideo" no encuentra nada en un título que
  solo diga "para tu negocio". Entra en 60 caracteres, así que no se corta en
  los resultados.
*/
const TITLE = "Surlabs | Software a medida en Montevideo, Uruguay";

export const metadata: Metadata = {
  // Iba sin www y el sitio se sirve CON www. Eso hacía que las URL absolutas de
  // Open Graph apuntaran al dominio que redirige, no al bueno.
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: SITE_DESCRIPTION,
  // No había ninguna: sin canonical, cualquier variante con parámetros (los
  // ?utm_source= que usamos para medir, sin ir más lejos) se puede indexar
  // aparte y competir consigo misma.
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "es_UY",
    type: "website",
  },
  // Antes quedaba en "summary", que muestra una miniatura chica al costado.
  // Con imagen propia conviene la tarjeta grande.
  twitter: { card: "summary_large_image", title: TITLE, description: SITE_DESCRIPTION },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bricolage.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/*
          Datos estructurados. Van con dangerouslySetInnerHTML porque es la
          única forma de emitir JSON-LD sin que React lo escape: es la manera
          que documenta Next para esto, no un atajo.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema()) }}
        />
      </head>
      <body className="grain min-h-[100dvh] bg-ink font-sans text-bone">
        {/* Sin JS no hay IntersectionObserver, así que nada puede quedar invisible. */}
        <noscript>
          <style>{`.animate-on-scroll,.animate-rise{opacity:1!important;transform:none!important;animation:none!important}.animate-line-x,.animate-line-y{transform:none!important}`}</style>
        </noscript>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-brand focus:bg-ember focus:px-4 focus:py-2 focus:font-semibold focus:text-ink"
        >
          Saltar al contenido
        </a>
        {children}
        {/*
          VERCEL_ENV lo define Vercel solo y vale "production", "preview" o
          "development". Se lee acá, del lado del servidor, y se baja resuelto:
          así el componente de cliente no depende de que la variable esté
          expuesta al navegador.
        */}
        <Metrics
          mode={process.env.VERCEL_ENV === "production" ? "production" : "development"}
        />
      </body>
    </html>
  );
}
