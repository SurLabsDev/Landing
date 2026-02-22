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

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 15 }
    }
};

export function Projects() {
    return (
        <section id="proyectos" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-surlabs-accent/5 rounded-full blur-[150px] -z-10 pointer-events-none"
            />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-white tracking-tight">
                    Soluciones con <span className="text-transparent bg-clip-text bg-gradient-to-r from-surlabs-secondary via-white to-surlabs-accent text-glow">Impacto Real</span>
                </h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100px" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-1 bg-gradient-to-r from-surlabs-accent to-transparent mb-6"
                />
                <p className="text-gray-300 max-w-2xl text-lg leading-relaxed font-medium">
                    No solo escribimos código. Construimos herramientas digitales simples que te ayudan a vender más, optimizar tu tiempo y operar mejor.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{
                            y: -4,
                            boxShadow: "0 10px 30px -10px rgba(0,240,255,0.1)",
                            borderColor: "rgba(255,255,255,0.1)"
                        }}
                        className="glass-panel p-8 group flex flex-col relative overflow-hidden transition-all duration-300 backdrop-blur-2xl bg-white/5 border-white/5"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-surlabs-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            className="relative z-10 mb-6"
                        >
                            <div className="absolute inset-0 bg-surlabs-accent/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                            <div className="relative z-10 p-3 inline-block bg-white/5 rounded-2xl border border-white/10 group-hover:border-surlabs-accent/50 transition-colors">
                                {project.icon}
                            </div>
                        </motion.div>

                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-surlabs-accent transition-colors relative z-10">
                            {project.title}
                        </h3>
                        <p className="text-gray-400 mb-6 flex-1 text-base leading-relaxed group-hover:text-gray-300 transition-colors relative z-10">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                            {project.tags.map((tag, i) => (
                                <motion.span
                                    key={tag}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 + i * 0.1 }}
                                    className="text-xs font-mono px-3 py-1.5 rounded-full bg-black/50 text-gray-300 border border-white/5 group-hover:border-surlabs-accent/30 group-hover:text-white transition-colors"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 mt-auto relative z-10">
                            <a href="#contacto" className="flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-surlabs-accent transition-colors">
                                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                <span>Consultar por esta solución</span>
                            </a>
                        </div>

                        {/* Edge glow line that moves on hover */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-surlabs-accent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
