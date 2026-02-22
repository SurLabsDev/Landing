import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Demos } from "@/components/sections/Demos";
import { Process } from "@/components/sections/Process";
import { Footer } from "@/components/ui/Footer";
import { ScrollAnimator } from "@/components/ui/ScrollAnimator";
import dynamic from "next/dynamic";

const Contact = dynamic(() => import("@/components/sections/Contact").then((mod) => mod.Contact));

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Projects />
        <Demos />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
