import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/ui/Footer";
import { ScrollAnimator } from "@/components/ui/ScrollAnimator";

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <Header />
      <main id="contenido" className="flex flex-col">
        <Hero />
        <Work />
        <Services />
        <Process />
        {/* Va después del proceso y antes del formulario: las objeciones se
            contestan justo cuando el visitante está por decidir si escribe. */}
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
