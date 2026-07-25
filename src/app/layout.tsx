import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://surlabs.tech"),
  title: "Surlabs | Software a medida para tu negocio",
  description:
    "Diseñamos y construimos las herramientas digitales que tu equipo usa todos los días. Reservas, pedidos, clientes y stock. Montevideo, Uruguay.",
  openGraph: {
    title: "Surlabs | Software a medida para tu negocio",
    description:
      "Diseñamos y construimos las herramientas digitales que tu equipo usa todos los días.",
    locale: "es_UY",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bricolage.variable} ${jetbrainsMono.variable}`}>
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
      </body>
    </html>
  );
}
