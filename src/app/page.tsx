import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("@/components/sections/Projects").then((mod) => mod.Projects));
const Demos = dynamic(() => import("@/components/sections/Demos").then((mod) => mod.Demos));
const Process = dynamic(() => import("@/components/sections/Process").then((mod) => mod.Process));
const Contact = dynamic(() => import("@/components/sections/Contact").then((mod) => mod.Contact));
const Footer = dynamic(() => import("@/components/ui/Footer").then((mod) => mod.Footer));

export default function Home() {
  return (
    <>
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
