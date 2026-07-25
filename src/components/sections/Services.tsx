import Image from "next/image";
import Link from "next/link";
import {
    CalendarCheck,
    Storefront,
    ChartLineUp,
    Megaphone,
} from "@phosphor-icons/react/dist/ssr";

/**
 * Bento asimétrico de 4 celdas para 4 servicios. Ni una celda vacía, ni cuatro
 * tarjetas iguales en fila.
 *
 * La asimetría es por ANCHO (7/5 arriba, 5/7 abajo) y no por alto. Una versión
 * anterior tenía una celda ocupando dos filas: quedaba de 528px con 200px de
 * contenido, y esos 328px de sobra se veían como un error. Sin spans de fila,
 * cada celda mide lo que mide su contenido.
 */
const services = [
    {
        title: "Agenda y reservas",
        body: "Reservas automatizadas con recordatorio por WhatsApp. Se termina el ida y vuelta para confirmar un turno.",
        icon: CalendarCheck,
        image: "/demos/ejemplo5.webp",
        area: "lg:col-span-7",
    },
    {
        title: "Menú y catálogo digital",
        body: "Catálogo que actualizás vos. Tus clientes escanean, ven fotos reales y piden sin esperar a que alguien los atienda.",
        icon: Storefront,
        image: "/demos/ejemplo6.webp",
        area: "lg:col-span-5",
    },
    {
        title: "Gestión comercial",
        body: "Un panel para ordenar lo que hoy vive en planillas y cuadernos.",
        icon: ChartLineUp,
        image: "/demos/ejemplo1.webp",
        area: "lg:col-span-5",
    },
    {
        title: "Sitios que venden",
        body: "Rápidos, medibles y pensados para que el visitante haga algo.",
        icon: Megaphone,
        image: "/demos/ejemplo9.webp",
        area: "lg:col-span-7",
    },
];

export function Services() {
    return (
        <section id="servicios" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 lg:py-32">
            <div className="animate-on-scroll max-w-[24ch]">
                <h2 className="type-display text-[2.75rem] font-extrabold sm:text-5xl lg:text-6xl">
                    Lo que construimos.
                </h2>
                <div className="animate-line-x mt-7 h-px w-full origin-left bg-ember" />
            </div>

            <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-12">
                {services.map((service, i) => {
                    const Icon = service.icon;
                    return (
                        <div
                            key={service.title}
                            /*
                              justify-end: el bloque de ícono, título y texto va
                              entero abajo. Separarlos con justify-between dejaba
                              un pozo en el medio de la celda.
                            */
                            className={`rounded-brand animate-on-scroll group relative flex min-h-[15rem] flex-col justify-end overflow-hidden border border-bone/12 bg-ink p-7 lg:p-9 ${service.area}`}
                            style={{ transitionDelay: `${i * 90}ms` }}
                        >
                            {/*
                              La captura va desenfocada: acá es textura, no
                              contenido. Nítida se lee el texto de la propia demo
                              y compite con el título de la tarjeta, que es
                              justamente lo que no queremos.
                            */}
                            <Image
                                src={service.image}
                                alt=""
                                aria-hidden="true"
                                fill
                                sizes="(max-width: 1024px) 100vw, 45vw"
                                className="scale-110 object-cover object-top opacity-40 blur-[9px] transition-opacity duration-500 group-hover:opacity-55"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink from-35% via-ink/90 via-65% to-ink/40" />

                            <div className="relative">
                                <Icon
                                    size={30}
                                    weight="light"
                                    className="mb-5 text-ember"
                                    aria-hidden="true"
                                />
                                <h3 className="type-display text-2xl font-bold lg:text-3xl">
                                    {service.title}
                                </h3>
                                <p className="type-body mt-3 max-w-[38ch] text-[0.9375rem] leading-relaxed text-bone-dim">
                                    {service.body}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <p className="animate-on-scroll type-body mt-10 text-base text-bone-dim">
                ¿Lo tuyo no está en la lista?{" "}
                <Link href="#contacto" className="link-underline font-semibold text-bone">
                    Hablemos
                </Link>
                .
            </p>
        </section>
    );
}
