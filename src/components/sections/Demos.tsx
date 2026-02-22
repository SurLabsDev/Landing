import { ExternalLink, Briefcase, ShoppingBag, Palette, Gamepad2, CalendarCheck, Coffee } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Demo {
    id: string;
    title: string;
    description: string;
    url: string;
    icon: LucideIcon;
    color: string;
}

const demos: Demo[] = [
    {
        id: "ejemplo1",
        title: "Gestión Comercial y CRM",
        description: "Panel de control técnico para métricas de ventas y operaciones.",
        url: "https://demos.surlabs.tech/ejemplo1",
        icon: Briefcase,
        color: "from-blue-500 to-indigo-600"
    },
    {
        id: "ejemplo2",
        title: "E-Commerce de Lujo",
        description: "Tienda online elegante enfocada en alta conversión de ventas.",
        url: "https://demos.surlabs.tech/ejemplo2",
        icon: ShoppingBag,
        color: "from-amber-500 to-orange-600"
    },
    {
        id: "ejemplo3",
        title: "Agencia Creativa",
        description: "Portfolio/Landing page con diseño brutalista y animaciones.",
        url: "https://demos.surlabs.tech/ejemplo3",
        icon: Palette,
        color: "from-pink-500 to-rose-600"
    },
    {
        id: "ejemplo4",
        title: "Menú Digital Arcade",
        description: "Menú interactivo con estética retro y animaciones Gamificadas.",
        url: "https://demos.surlabs.tech/ejemplo4",
        icon: Gamepad2,
        color: "from-purple-500 to-violet-600"
    },
    {
        id: "ejemplo5",
        title: "Agenda Inteligente",
        description: "Sistema de reservas y calendario optimizado para servicios.",
        url: "https://demos.surlabs.tech/ejemplo5",
        icon: CalendarCheck,
        color: "from-emerald-500 to-teal-600"
    },
    {
        id: "ejemplo6",
        title: "Tienda Concepto Gastronómico",
        description: "Landing page interactiva con menú, carrusel y club de beneficios.",
        url: "https://demos.surlabs.tech/ejemplo6",
        icon: Coffee,
        color: "from-orange-500 to-red-600"
    }
];

export function Demos() {
    return (
        <section id="demos" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
            <div className="animate-on-scroll mb-16 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-white tracking-tight">
                    Experiencias <span className="text-transparent bg-clip-text bg-gradient-to-r from-surlabs-secondary via-white to-surlabs-accent text-glow">Interactivas</span>
                </h2>
                <div className="h-1 w-[100px] bg-gradient-to-r from-surlabs-accent to-transparent mx-auto mb-6" />
                <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                    Explora nuestros prototipos funcionales y descubre el potencial de una interfaz diseñada para convertir. Selecciona cualquiera de las demos para probarla.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {demos.map((demo, index) => {
                    const Icon = demo.icon;
                    return (
                        <div
                            key={demo.id}
                            className="animate-on-scroll"
                            style={{ transitionDelay: `${index * 80}ms` }}
                        >
                            <a
                                href={demo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-md shadow-lg hover:shadow-[0_0_40px_rgba(0,240,255,0.15)] hover:border-surlabs-accent/30 hover:-translate-y-2 transition-all duration-300 relative h-full"
                            >
                                <div className="p-8 flex flex-col h-full relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${demo.color} shadow-lg`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-surlabs-accent transition-colors">
                                            {demo.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-400 text-base leading-relaxed flex-1 mb-8">
                                        {demo.description}
                                    </p>
                                    <div className="mt-auto flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity">
                                        <span className="text-sm font-bold text-surlabs-accent uppercase tracking-wider">Explorar Demo</span>
                                        <div className="w-10 h-10 rounded-full bg-surlabs-accent/10 flex items-center justify-center text-surlabs-accent group-hover:bg-surlabs-accent group-hover:text-gray-900 transition-colors">
                                            <ExternalLink className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>

                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${demo.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-full pointer-events-none`} />
                            </a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
