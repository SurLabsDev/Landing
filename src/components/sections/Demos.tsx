"use client";

import { motion } from "framer-motion";
import { ExternalLink, Briefcase, ShoppingBag, Palette, Gamepad2, CalendarCheck, Coffee, Image as ImageIcon } from "lucide-react";

const demos = [
    {
        id: "ejemplo1",
        title: "Gestión Comercial y CRM",
        description: "Panel de control técnico para métricas de ventas y operaciones.",
        url: "https://demos.surlabs.tech/ejemplo1",
        image: "/demos/crm.jpg",
        icon: Briefcase,
        color: "from-blue-500 to-indigo-600"
    },
    {
        id: "ejemplo2",
        title: "E-Commerce de Lujo",
        description: "Tienda online elegante enfocada en alta conversión de ventas.",
        url: "https://demos.surlabs.tech/ejemplo2",
        image: "/demos/ecommerce.jpg",
        icon: ShoppingBag,
        color: "from-amber-500 to-orange-600"
    },
    {
        id: "ejemplo3",
        title: "Agencia Creativa",
        description: "Portfolio/Landing page con diseño brutalista y animaciones.",
        url: "https://demos.surlabs.tech/ejemplo3",
        image: "/demos/agencia.jpg",
        icon: Palette,
        color: "from-pink-500 to-rose-600"
    },
    {
        id: "ejemplo4",
        title: "Menú Digital Arcade",
        description: "Menú interactivo con estética retro y animaciones Gamificadas.",
        url: "https://demos.surlabs.tech/ejemplo4",
        image: "/demos/arcade.jpg",
        icon: Gamepad2,
        color: "from-purple-500 to-violet-600"
    },
    {
        id: "ejemplo5",
        title: "Agenda Inteligente",
        description: "Sistema de reservas y calendario optimizado para servicios.",
        url: "https://demos.surlabs.tech/ejemplo5",
        image: "/demos/agenda.jpg",
        icon: CalendarCheck,
        color: "from-emerald-500 to-teal-600"
    },
    {
        id: "ejemplo6",
        title: "Tienda Concepto Gastronómico",
        description: "Landing page interactiva con menú, carrusel y club de beneficios.",
        url: "https://demos.surlabs.tech/ejemplo6",
        image: "/demos/gastronomia.jpg",
        icon: Coffee,
        color: "from-orange-500 to-red-600"
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5 }
    }
};

export function Demos() {
    return (
        <section id="demos" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-white tracking-tight">
                    Experiencias <span className="text-transparent bg-clip-text bg-gradient-to-r from-surlabs-secondary via-white to-surlabs-accent text-glow">Interactivas</span>
                </h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100px" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-1 bg-gradient-to-r from-surlabs-accent to-transparent mx-auto mb-6"
                />
                <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                    Explora nuestros prototipos funcionales y descubre el potencial de una interfaz diseñada para convertir. Selecciona cualquiera de las demos para probarla.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {demos.map((demo) => {
                    const Icon = demo.icon;
                    return (
                        <motion.a
                            key={demo.id}
                            href={demo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-md shadow-lg hover:shadow-[0_0_40px_rgba(0,240,255,0.15)] hover:border-surlabs-accent/30 transition-all duration-300"
                        >
                            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900 border-b border-white/10 group-hover:border-surlabs-accent/30 transition-colors duration-300">
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 z-30 flex items-center justify-center pointer-events-none">
                                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-surlabs-accent text-gray-900 px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-[0_0_30px_rgba(0,240,255,0.4)]">
                                        <span>Probar Demo</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </div>
                                </div>

                                {/* Actual iframe fixed to not be interactive */}
                                <div className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-[0.25] z-10 bg-white">
                                    <iframe
                                        src={demo.url}
                                        className="w-full h-full border-0 pointer-events-none transition-transform duration-700 group-hover:scale-[1.02]"
                                        title={`Demo de ${demo.title}`}
                                        tabIndex={-1}
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            <div className="p-6 md:p-8 flex flex-col flex-1 relative bg-gradient-to-t from-black/40 to-transparent">
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`p-2 rounded-lg bg-gradient-to-br ${demo.color} shadow-lg`}>
                                        <Icon className="w-4 h-4 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-surlabs-accent transition-colors">
                                        {demo.title}
                                    </h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                                    {demo.description}
                                </p>
                            </div>
                        </motion.a>
                    );
                })}
            </motion.div>
        </section>
    );
}
