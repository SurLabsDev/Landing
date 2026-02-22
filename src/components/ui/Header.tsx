"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal } from "lucide-react";

export function Header() {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 glass-panel m-4 mt-6 mx-auto max-w-7xl"
        >
            <Link href="/" className="flex items-center gap-2 group">
                <div className="bg-surlabs-dark/50 p-2 rounded-lg border border-surlabs-accent/30 group-hover:border-surlabs-accent transition-colors">
                    <Terminal className="w-6 h-6 text-surlabs-accent" />
                </div>
                <span className="font-mono font-bold text-xl tracking-tighter">
                    SUR<span className="text-surlabs-accent">LABS</span>
                </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                <Link href="#proyectos" className="hover:text-surlabs-accent transition-colors">
                    Proyectos
                </Link>
                <Link href="#servicios" className="hover:text-surlabs-accent transition-colors">
                    Servicios
                </Link>
                <Link href="#contacto" className="hover:text-surlabs-accent transition-colors">
                    Contacto
                </Link>
            </nav>

            <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contacto"
                className="px-5 py-2.5 rounded-lg bg-surlabs-accent text-surlabs-dark font-medium text-sm hover:bg-surlabs-accent-hover transition-colors shadow-[0_0_15px_rgba(0,240,255,0.3)]"
            >
                Iniciá tu proyecto
            </motion.a>
        </motion.header>
    );
}
