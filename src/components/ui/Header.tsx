"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Terminal, Menu, X } from "lucide-react";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex flex-col px-6 py-4 md:px-12 glass-panel m-4 mt-6 mx-auto max-w-7xl overflow-hidden md:overflow-visible transition-all duration-300"
            style={{ height: isMobileMenuOpen ? "auto" : "auto" }}
        >
            <div className="flex items-center justify-between w-full">
                <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="bg-surlabs-dark/50 p-2 rounded-lg border border-surlabs-accent/30 group-hover:border-surlabs-accent transition-colors">
                        <Terminal className="w-5 h-5 lg:w-6 lg:h-6 text-surlabs-accent" />
                    </div>
                    <span className="font-mono font-bold text-lg lg:text-xl tracking-tighter">
                        SUR<span className="text-surlabs-accent">LABS</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link href="#proyectos" className="hover:text-surlabs-accent transition-colors">
                        Proyectos
                    </Link>
                    <Link href="#metodologia" className="hover:text-surlabs-accent transition-colors">
                        Metodología
                    </Link>
                    <Link href="#contacto" className="hover:text-surlabs-accent transition-colors">
                        Contacto
                    </Link>
                </nav>

                <div className="hidden md:block">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contacto"
                        className="px-5 py-2.5 rounded-lg bg-surlabs-accent text-surlabs-dark font-medium text-sm hover:bg-surlabs-accent-hover transition-colors shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                    >
                        Iniciá tu proyecto
                    </motion.a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden p-2 text-white hover:text-surlabs-accent transition-colors border border-white/10 rounded-lg bg-white/5"
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden w-full overflow-hidden"
                    >
                        <nav className="flex flex-col gap-4 pt-6 pb-2 text-base font-medium border-t border-white/10 mt-4">
                            <Link
                                href="#proyectos"
                                onClick={toggleMenu}
                                className="hover:text-surlabs-accent transition-colors py-2 px-2 rounded-lg hover:bg-white/5"
                            >
                                Proyectos
                            </Link>
                            <Link
                                href="#metodologia"
                                onClick={toggleMenu}
                                className="hover:text-surlabs-accent transition-colors py-2 px-2 rounded-lg hover:bg-white/5"
                            >
                                Metodología
                            </Link>
                            <Link
                                href="#contacto"
                                onClick={toggleMenu}
                                className="hover:text-surlabs-accent transition-colors py-2 px-2 rounded-lg hover:bg-white/5"
                            >
                                Contacto
                            </Link>
                            <motion.a
                                whileTap={{ scale: 0.95 }}
                                href="#contacto"
                                onClick={toggleMenu}
                                className="mt-2 w-full text-center px-5 py-3 rounded-lg bg-surlabs-accent text-surlabs-dark font-bold text-sm shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                            >
                                Iniciá tu proyecto
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
