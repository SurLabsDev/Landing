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

const processContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const stepVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 80, damping: 12 }
    }
};

export function Process() {
    return (
        <section id="metodologia" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 -right-[20%] w-[50rem] h-[50rem] bg-surlabs-secondary/5 rounded-full blur-[120px] -z-10 pointer-events-none"
            />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-20 text-center md:text-left"
            >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-white tracking-tight">
                    Cómo <span className="text-glow text-transparent bg-clip-text bg-gradient-to-r from-surlabs-accent to-white">Trabajamos</span>
                </h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-1 bg-surlabs-accent mb-6 mx-auto md:mx-0 shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                />
                <p className="text-gray-300 max-w-2xl text-lg leading-relaxed font-medium mx-auto md:mx-0">
                    Discovery claro, ejecución ágil, y foco en los resultados de tu negocio.
                </p>
            </motion.div>

            <motion.div
                variants={processContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 relative"
            >
                {/* Connecting Animated Line (Desktop) */}
                <div className="hidden lg:block absolute top-[20%] left-0 w-full h-[2px] bg-white/5 -z-10">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                        className="h-full w-full bg-gradient-to-r from-surlabs-accent via-surlabs-secondary to-transparent origin-left shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                    />
                </div>

                {/* Connecting Animated Line (Mobile Vertical) */}
                <div className="block lg:hidden absolute top-[10%] left-4 md:left-[50%] md:-translate-x-1/2 w-[2px] h-[80%] bg-white/5 -z-10">
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                        className="h-full w-full bg-gradient-to-b from-surlabs-accent via-surlabs-secondary to-transparent origin-top shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                    />
                </div>

                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        variants={stepVariants}
                        whileHover={{ y: -10 }}
                        className="flex flex-col relative group pl-8 md:pl-0"
                    >
                        {/* Glowing Number indicator */}
                        <motion.div
                            initial={{ opacity: 0, rotate: -45 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                            className="text-4xl md:text-5xl font-black font-mono text-white/5 mb-4 md:mb-6 select-none -translate-x-2 group-hover:text-surlabs-accent/20 transition-colors"
                        >
                            {step.number}
                        </motion.div>

                        <div className="glass-panel p-6 md:p-8 flex-1 group-hover:border-surlabs-accent/30 transition-all duration-300 backdrop-blur-2xl bg-white/5 border-white/5 shadow-lg group-hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] relative overflow-hidden">

                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="relative z-10 mb-4 md:mb-6 inline-block bg-black/20 p-3 md:p-4 rounded-2xl border border-white/5 group-hover:border-surlabs-accent/20 transition-colors"
                            >
                                {step.icon}
                            </motion.div>

                            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white group-hover:text-surlabs-accent transition-colors relative z-10">
                                {step.title}
                            </h3>
                            <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors relative z-10">
                                {step.description}
                            </p>

                            {/* Hover corner accent */}
                            <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-bl from-surlabs-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full" />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
