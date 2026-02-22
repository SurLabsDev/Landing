import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-28 md:pt-32 pb-20 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-grid-white bg-[length:32px_32px] opacity-10 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />

            <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-surlabs-accent/20 rounded-full blur-[128px] -z-10 animate-blob" />
            <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-surlabs-secondary/20 rounded-full blur-[128px] -z-10 animate-blob-alt" />

            <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-surlabs-accent/30 glass-panel text-xs md:text-sm mb-8 font-mono shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                    <span className="flex h-2 w-2 rounded-full bg-surlabs-accent animate-pulse relative">
                        <span className="absolute inset-0 rounded-full bg-surlabs-accent animate-ping opacity-75"></span>
                    </span>
                    <span className="text-white">
                        No solo código: priorizamos impacto y velocidad.
                    </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white">
                    Software y AI para
                    <br className="hidden md:block" />
                    <span className="inline-block mt-2 pb-4 pr-4 -mb-4 -mr-4 text-glow text-transparent bg-clip-text bg-gradient-to-r from-surlabs-accent via-white to-surlabs-secondary">
                        crecer tu negocio
                    </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed text-gray-300">
                    Diseñamos, construimos y optimizamos software y automatizaciones para equipos que quieren vender más y operar con claridad. Productos que generan resultados reales.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#contacto"
                        className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-bold transition-all duration-200 flex items-center justify-center gap-2 group hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95"
                    >
                        Diagnóstico gratis
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#proyectos"
                        className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-white border border-white/10 font-semibold transition-all duration-200 hover:scale-105 hover:border-surlabs-accent/50 hover:bg-white/10 active:scale-95"
                    >
                        Ver soluciones
                    </a>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-delayed">
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-mono">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent animate-scroll-bounce" />
            </div>
        </section>
    );
}
