import { Search, PenTool, Braces, Rocket } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "Analizamos tu proceso actual para entender el problema real y definir métricas de éxito (vender más, ahorrar tiempo).",
        icon: <Search className="w-8 h-8 text-surlabs-accent mb-4" />
    },
    {
        number: "02",
        title: "Propuesta",
        description: "Diseñamos un alcance ágil. Sin humo. Definimos tiempos, costos y el impacto esperado en tu operación comercial.",
        icon: <PenTool className="w-8 h-8 text-gray-400 mb-4" />
    },
    {
        number: "03",
        title: "Construcción",
        description: "Ejecutamos con tecnología robusta y diseño centrado en el usuario final. Iteramos rápido y lanzamos una v1 que aporte valor inmediato.",
        icon: <Braces className="w-8 h-8 text-gray-400 mb-4" />
    },
    {
        number: "04",
        title: "Soporte y Evolución",
        description: "Monitoreo, correcciones y mejoras continuas. Nos convertimos en tu brazo técnico para que te enfoques en tu negocio.",
        icon: <Rocket className="w-8 h-8 text-surlabs-secondary mb-4" />
    }
];

export function Process() {
    return (
        <section id="metodologia" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
            <div className="animate-on-scroll mb-20 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-white tracking-tight">
                    Cómo <span className="text-glow text-transparent bg-clip-text bg-gradient-to-r from-surlabs-accent to-white">Trabajamos</span>
                </h2>
                <div className="h-1 w-[100px] bg-surlabs-accent mb-6 mx-auto md:mx-0 shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
                <p className="text-gray-300 max-w-2xl text-lg leading-relaxed font-medium mx-auto md:mx-0">
                    Discovery claro, ejecución ágil, y foco en los resultados de tu negocio.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden lg:block absolute top-[20%] left-0 w-full h-[2px] bg-white/5 -z-10">
                    <div className="h-full w-full bg-gradient-to-r from-surlabs-accent via-surlabs-secondary to-transparent shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
                </div>

                {/* Connecting Line (Mobile Vertical) */}
                <div className="block lg:hidden absolute top-[10%] left-4 md:left-[50%] md:-translate-x-1/2 w-[2px] h-[80%] bg-white/5 -z-10">
                    <div className="h-full w-full bg-gradient-to-b from-surlabs-accent via-surlabs-secondary to-transparent shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
                </div>

                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="animate-on-scroll"
                        style={{ transitionDelay: `${index * 120}ms` }}
                    >
                        <div className="flex flex-col relative group pl-8 md:pl-0 h-full">
                            <div className="text-4xl md:text-5xl font-black font-mono text-white/5 mb-4 md:mb-6 select-none -translate-x-2 group-hover:text-surlabs-accent/20 transition-colors">
                                {step.number}
                            </div>

                            <div className="glass-panel p-6 md:p-8 flex-1 group-hover:border-surlabs-accent/30 transition-all duration-300 bg-white/5 border-white/5 shadow-lg group-hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] relative overflow-hidden hover:-translate-y-2">
                                <div className="relative z-10 mb-4 md:mb-6 inline-block bg-black/20 p-3 md:p-4 rounded-2xl border border-white/5 group-hover:border-surlabs-accent/20 transition-colors">
                                    {step.icon}
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white group-hover:text-surlabs-accent transition-colors relative z-10">
                                    {step.title}
                                </h3>
                                <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors relative z-10">
                                    {step.description}
                                </p>

                                <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-bl from-surlabs-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
