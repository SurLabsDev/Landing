"use client";

import { motion } from "framer-motion";
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
        <section id="metodologia" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
            <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-surlabs-secondary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-4 text-white"
                >
                    Cómo <span className="text-glow text-surlabs-accent">Trabajamos</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-300 max-w-2xl text-lg leading-relaxed"
                >
                    Discovery claro, ejecución ágil, y foco en los resultados de tu negocio.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden lg:block absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />

                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                        className="flex flex-col relative"
                    >
                        {/* Number indicator */}
                        <div className="text-4xl font-mono font-bold text-white/5 mb-6 select-none -translate-x-2">
                            {step.number}
                        </div>

                        <div className="glass-panel p-6 flex-1 hover:border-white/20 transition-colors backdrop-blur-xl bg-white/5">
                            {step.icon}
                            <h3 className="text-xl font-bold mb-3 text-white">
                                {step.title}
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
