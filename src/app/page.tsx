import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
