import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Surlabs | Software Factory",
  description: "Modern software factory providing high-end tech solutions and innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${jetbrainsMono.variable} dark`}>
      <body className="antialiased min-h-screen bg-[#0a0a0b] text-[#f8f9fa] aurora-bg">
        {children}
      </body>
    </html>
  );
}
