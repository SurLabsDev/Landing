"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Rocket, ShieldCheck } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-grid-white bg-[length:32px_32px] opacity-10 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />

            {/* Decorative Blur Blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-surlabs-accent/20 rounded-full blur-[128px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-surlabs-secondary/20 rounded-full blur-[128px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 glass-panel text-xs md:text-sm mb-8 font-mono shadow-lg shadow-surlabs-accent/5 backdrop-blur-xl bg-white/5"
                >
                    <span className="flex h-2 w-2 rounded-full bg-surlabs-accent animate-pulse relative">
                        <span className="absolute inset-0 rounded-full bg-surlabs-accent animate-ping opacity-75"></span>
                    </span>
                    No solo código: priorizamos impacto y velocidad.
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    Software y AI para <br className="hidden md:block" />
                    <span className="text-glow text-transparent bg-clip-text bg-gradient-to-r from-surlabs-accent via-white to-surlabs-secondary">
                        crecer tu negocio
                    </span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Diseñamos, construimos y optimizamos software y automatizaciones para equipos que quieren vender más y operar con claridad. Productos que generan resultados reales.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contacto"
                        className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    >
                        Diagnóstico gratis
                        <ArrowRight className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#proyectos"
                        className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-white hover:bg-white/10 hover:border-surlabs-accent/30 transition-all font-semibold"
                    >
                        Ver soluciones
                    </motion.a>
                </motion.div>
            </div>

            {/* Abstract decorative elements with floating animation */}
            <motion.div
                className="absolute bottom-20 left-10 md:left-20 glass-panel p-4 hidden md:block bg-white/5 backdrop-blur-md"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
                transition={{
                    opacity: { duration: 1, delay: 0.5 },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
            >
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-surlabs-accent/10 rounded-lg">
                        <Code2 className="w-6 h-6 text-surlabs-accent" />
                    </div>
                    <div>
                        <p className="text-xs font-mono text-white">Clean Architecture</p>
                        <p className="text-[10px] text-gray-400">Código mantenible</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="absolute top-40 right-10 md:right-20 glass-panel p-4 hidden lg:block bg-white/5 backdrop-blur-md"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
                transition={{
                    opacity: { duration: 1, delay: 0.7 },
                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
            >
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-surlabs-secondary/10 rounded-lg">
                        <Rocket className="w-6 h-6 text-surlabs-secondary" />
                    </div>
                    <div>
                        <p className="text-xs font-mono text-white">High Performance</p>
                        <p className="text-[10px] text-gray-400">Escalabilidad global</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="absolute bottom-40 right-10 md:right-32 glass-panel p-3 border-surlabs-accent/20 hidden xl:block bg-white/5 backdrop-blur-md"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: [0, 5, -5, 0] }}
                transition={{
                    opacity: { duration: 0.5, delay: 0.9 },
                    scale: { duration: 0.5, delay: 0.9 },
                    rotate: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
                }}
            >
                <ShieldCheck className="w-5 h-5 text-surlabs-accent" />
            </motion.div>

        </section>
    );
}
