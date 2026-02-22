"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Rocket, ShieldCheck, Cpu, Zap, Database } from "lucide-react";

const textRevealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8
        }
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        }
    }
};

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-28 md:pt-32 pb-20 px-6 overflow-hidden">
            {/* Background Grid Pattern with Parallax feel */}
            <motion.div
                animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-grid-white bg-[length:32px_32px] opacity-10 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"
            />

            {/* Dynamic Animated Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 50, 0],
                    y: [0, -50, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-surlabs-accent/20 rounded-full blur-[128px] -z-10"
            />

            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, -50, 0],
                    y: [0, 50, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-surlabs-secondary/20 rounded-full blur-[128px] -z-10"
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-5xl mx-auto text-center"
            >
                <motion.div
                    variants={textRevealVariants}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-surlabs-accent/30 glass-panel text-xs md:text-sm mb-8 font-mono shadow-[0_0_15px_rgba(0,240,255,0.2)] backdrop-blur-xl bg-white/5 relative overflow-hidden group"
                >
                    {/* Shine effect on badge */}
                    <motion.div
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    />
                    <span className="flex h-2 w-2 rounded-full bg-surlabs-accent animate-pulse relative">
                        <span className="absolute inset-0 rounded-full bg-surlabs-accent animate-ping opacity-75"></span>
                    </span>
                    <span className="text-white group-hover:text-surlabs-accent transition-colors">
                        No solo código: priorizamos impacto y velocidad.
                    </span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white">
                    <div className="overflow-visible inline-block align-top">
                        <span className="inline-block">Software</span>
                    </div>
                    {" "}
                    <div className="overflow-visible inline-block align-top">
                        <span className="inline-block">y</span>
                    </div>
                    {" "}
                    <div className="overflow-visible inline-block align-top">
                        <span className="inline-block">AI</span>
                    </div>
                    {" "}
                    <div className="overflow-visible inline-block align-top">
                        <span className="inline-block">para</span>
                    </div>
                    <br className="hidden md:block" />
                    <div className="overflow-visible inline-block align-top mt-2">
                        <span className="inline-block pb-4 pr-4 -mb-4 -mr-4 text-glow text-transparent bg-clip-text bg-gradient-to-r from-surlabs-accent via-white to-surlabs-secondary">
                            crecer tu negocio
                        </span>
                    </div>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-foreground/70 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed text-gray-300">
                    Diseñamos, construimos y optimizamos software y automatizaciones para equipos que quieren vender más y operar con claridad. Productos que generan resultados reales.
                </p>

                <motion.div
                    variants={textRevealVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.a
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        href="#contacto"
                        className="relative overflow-hidden w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-bold transition-all flex items-center justify-center gap-2 group"
                    >
                        {/* Infinite shine on main button */}
                        <motion.div
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -skew-x-12"
                        />
                        Diagnóstico gratis
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05, borderColor: "rgba(0,240,255,0.5)", backgroundColor: "rgba(255,255,255,0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        href="#proyectos"
                        className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-white border border-white/10 transition-all font-semibold"
                    >
                        Ver soluciones
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Advanced Abstract floating elements */}
            <motion.div
                className="absolute bottom-[20%] left-[5%] md:left-[10%] glass-panel p-4 hidden md:block border-surlabs-accent/20"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
                transition={{
                    opacity: { duration: 1, delay: 0.8 },
                    scale: { duration: 1, delay: 0.8, type: "spring" },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
            >
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-surlabs-accent/20 rounded-xl border border-surlabs-accent/30 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                        <Code2 className="w-6 h-6 text-surlabs-accent" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-white tracking-wide">Clean Code</p>
                        <p className="text-xs text-surlabs-accent">Operación estable</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="absolute top-[25%] right-[5%] md:right-[12%] glass-panel p-4 hidden lg:block border-surlabs-secondary/20"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, y: [0, 20, 0], rotate: [0, -5, 5, 0] }}
                transition={{
                    opacity: { duration: 1, delay: 1 },
                    scale: { duration: 1, delay: 1, type: "spring" },
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                    rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" }
                }}
            >
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-surlabs-secondary/20 rounded-xl border border-surlabs-secondary/30 shadow-[0_0_15px_rgba(112,0,255,0.3)]">
                        <Zap className="w-6 h-6 text-surlabs-secondary" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-white tracking-wide">Alta Velociad</p>
                        <p className="text-xs text-surlabs-secondary">Mejora conversión</p>
                    </div>
                </div>
            </motion.div>

            {/* Scattered particles */}
            <motion.div
                className="absolute top-[30%] left-[15%] hidden xl:block"
                animate={{ y: [0, -30, 0], x: [0, 20, 0], rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
                <Cpu className="w-8 h-8 text-white/5" />
            </motion.div>

            <motion.div
                className="absolute bottom-[30%] right-[20%] hidden xl:block"
                animate={{ y: [0, 40, 0], x: [0, -30, 0], rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
                <Database className="w-10 h-10 text-white/5" />
            </motion.div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-mono">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent"
                />
            </motion.div>
        </section>
    );
}
