"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        companyType: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Format the message for WhatsApp
        const text = `Hola soy ${formData.name} de la empresa ${formData.company} y mi problema es:\n${formData.message}\n\n(Detalles extra - Correo: ${formData.email} | Tipo: ${formData.companyType})`;
        const encodedText = encodeURIComponent(text);

        // Phone number should be configured here (without spaces or +)
        const phoneNumber = "59891661552";

        window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
    };

    return (
        <section id="contacto" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[600px] aurora-bg opacity-30 blur-3xl -z-10 rounded-full" />

            <div className="mb-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-4"
                >
                    Iniciemos tu <span className="text-glow text-surlabs-accent">Proyecto</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-foreground/70 max-w-2xl mx-auto text-lg"
                >
                    Contanos tu idea. Estructuramos soluciones escalables paso a paso para asegurar el éxito técnico de tu producto.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    <div className="glass-panel p-6 md:p-8">
                        <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-surlabs-accent/10 flex items-center justify-center text-surlabs-accent border border-surlabs-accent/20 flex-shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-foreground/50 font-mono">Email</p>
                                    <p className="font-medium hover:text-surlabs-accent transition-colors cursor-pointer break-all">hello@surlabs.dev</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-surlabs-secondary/10 flex items-center justify-center text-surlabs-secondary border border-surlabs-secondary/20 flex-shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-foreground/50 font-mono">Chat directo</p>
                                    <p className="font-medium hover:text-surlabs-secondary transition-colors cursor-pointer">Vía WhatsApp al +598 91 661 552</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-foreground/80 border border-white/10 flex-shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-foreground/50 font-mono">Ubicación</p>
                                    <p className="font-medium">Montevideo, Uruguay (Remote)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <form onSubmit={handleSubmit} className="glass-panel p-6 md:p-8 space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-mono text-foreground/70 mb-2">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-surlabs-accent focus:ring-1 focus:ring-surlabs-accent transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-mono text-foreground/70 mb-2">
                                    Correo
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-surlabs-accent focus:ring-1 focus:ring-surlabs-accent transition-all"
                                    placeholder="john@empresa.com"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="company" className="block text-sm font-mono text-foreground/70 mb-2">
                                    Empresa
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    required
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-surlabs-accent focus:ring-1 focus:ring-surlabs-accent transition-all"
                                    placeholder="Tu Empresa"
                                />
                            </div>
                            <div>
                                <label htmlFor="companyType" className="block text-sm font-mono text-foreground/70 mb-2">
                                    Tipo de empresa
                                </label>
                                <select
                                    id="companyType"
                                    required
                                    value={formData.companyType}
                                    onChange={(e) => setFormData({ ...formData, companyType: e.target.value })}
                                    className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-surlabs-accent focus:ring-1 focus:ring-surlabs-accent transition-all text-white appearance-none"
                                >
                                    <option value="" disabled className="bg-background text-foreground/50">Seleccionar...</option>
                                    <option value="Startup" className="bg-background">Startup</option>
                                    <option value="Pyme" className="bg-background">Pyme / Local</option>
                                    <option value="Corporación" className="bg-background">Corporación</option>
                                    <option value="Agencia" className="bg-background">Agencia</option>
                                    <option value="Otro" className="bg-background">Otro</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-mono text-foreground/70 mb-2">
                                Problema o Idea
                            </label>
                            <textarea
                                id="message"
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={4}
                                className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-surlabs-accent focus:ring-1 focus:ring-surlabs-accent transition-all resize-none"
                                placeholder="Me gustaría desarrollar..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 rounded-lg bg-foreground text-background font-bold hover:bg-white/90 transition-colors flex items-center justify-center gap-2 group"
                        >
                            Enviar mensaje por WhatsApp
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
