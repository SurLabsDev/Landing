"use client";

import { motion } from "framer-motion";
import { ExternalLink, CalendarDays, Utensils, KanbanSquare, Megaphone } from "lucide-react";

const projects = [
    {
        title: "Agenda Web Inteligente",
        description: "Sistema de reservas automatizado con recordatorios por WhatsApp. Elimina el ida y vuelta con clientes y reduce el ausentismo un 40%.",
        tags: ["Reservas", "Pagos integrados", "WhatsApp API"],
        icon: <CalendarDays className="w-10 h-10 text-surlabs-accent mb-4" />,
        link: "#"
    },
    {
        title: "Menú Digital Interactivo",
        description: "Catálogo autogestionable para gastronomía. Tus clientes escanean, ven fotos reales, y piden directo a la cocina o barra sin esperas.",
        tags: ["Gastronomía", "Autogestión", "QR"],
        icon: <Utensils className="w-10 h-10 text-surlabs-secondary mb-4" />,
        link: "#"
    },
    {
        title: "Gestión Comercial y CRM",
        description: "Panel de control para equipos que necesitan ordenar sus procesos. Pipeline de ventas, historial de clientes y reportes automáticos.",
        tags: ["CRM", "Dashboard", "Operaciones"],
        icon: <KanbanSquare className="w-10 h-10 text-surlabs-accent mb-4" />,
        link: "#"
    },
    {
        title: "Landing Pages de Alta Conversión",
        description: "Sitios web ultrarrápidos enfocados 100% en captar leads y vender. Tracking integrado y optimización técnica para SEO.",
        tags: ["Ventas", "Google Analytics", "Performance"],
        icon: <Megaphone className="w-10 h-10 text-surlabs-secondary mb-4" />,
        link: "#"
    }
];

export function Projects() {
    return (
        <section id="proyectos" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-4 text-white"
                >
                    Soluciones con <span className="text-transparent bg-clip-text bg-gradient-to-r from-surlabs-secondary to-surlabs-accent text-glow">Impacto Real</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-300 max-w-2xl text-lg leading-relaxed"
                >
                    No solo escribimos código. Construimos herramientas digitales simples que te ayudan a vender más, optimizar tu tiempo y operar mejor.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -5 }}
                        className="glass-panel p-8 group flex flex-col hover:border-surlabs-accent/30 transition-all shadow-lg hover:shadow-surlabs-accent/5 backdrop-blur-xl bg-white/5"
                    >
                        {project.icon}

                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-surlabs-accent transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-gray-400 mb-6 flex-1 text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs font-mono px-3 py-1.5 rounded-full bg-black/40 text-gray-300 border border-white/10 group-hover:border-white/20 transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 mt-auto">
                            <a href="#contacto" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-surlabs-accent transition-colors">
                                <ExternalLink className="w-4 h-4" />
                                Consultar por esta solución
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
