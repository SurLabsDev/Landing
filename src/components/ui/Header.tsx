"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/brand/Logo";
import { EV } from "@/lib/track";

const nav = [
    { href: "#proyectos", label: "Trabajo" },
    { href: "#servicios", label: "Servicios" },
    { href: "#metodologia", label: "Proceso" },
];

export function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const sentinel = useRef<HTMLDivElement>(null);

    /**
     * El fondo del header aparece cuando el visitante deja atrás el tope de la
     * página. Se detecta observando un div centinela, nunca escuchando scroll:
     * un listener de scroll corre en cada frame y genera jank.
     */
    useEffect(() => {
        const el = sentinel.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => setScrolled(!entry.isIntersecting),
            { threshold: 0 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    // Con el menú abierto en mobile el fondo no debe scrollear.
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <div ref={sentinel} aria-hidden="true" className="absolute top-0 h-px w-full" />

            <header
                className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
                    scrolled || open
                        ? "border-b border-bone/10 bg-ink/95 backdrop-blur-sm"
                        : "border-b border-transparent"
                }`}
            >
                {/* Altura contenida: 68px en desktop, muy por debajo del techo de 80px. */}
                <div className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-5 md:px-10">
                    <Link
                        href="/"
                        aria-label="Surlabs, inicio"
                        onClick={() => setOpen(false)}
                        className="shrink-0"
                    >
                        <Logo />
                    </Link>

                    <nav className="hidden items-center gap-9 md:flex">
                        {nav.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="link-underline text-[0.9375rem] font-medium text-bone-dim transition-colors hover:text-bone"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="#contacto"
                            data-ev={EV.ctaHeader}
                            className="rounded-brand bg-ember px-5 py-2.5 text-[0.9375rem] font-semibold text-ink transition-colors hover:bg-ember-hot active:translate-y-px"
                        >
                            Hablemos
                        </Link>
                    </nav>

                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        aria-label={open ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={open}
                        aria-controls="menu-mobile"
                        className="rounded-brand -mr-2 p-2 text-bone md:hidden"
                    >
                        {open ? <X size={26} weight="bold" /> : <List size={26} weight="bold" />}
                    </button>
                </div>
            </header>

            {/* Menú mobile a pantalla completa. En desktop no existe. */}
            <div
                id="menu-mobile"
                hidden={!open}
                className="fixed inset-0 z-40 flex flex-col justify-center bg-ink px-5 pt-[68px] md:hidden"
            >
                <nav className="flex flex-col">
                    {nav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="type-display border-b border-bone/10 py-6 text-4xl font-extrabold text-bone"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <Link
                    href="#contacto"
                    onClick={() => setOpen(false)}
                    data-ev={EV.ctaMenu}
                    className="rounded-brand mt-10 bg-ember px-6 py-5 text-center text-lg font-bold text-ink"
                >
                    Hablemos
                </Link>
            </div>
        </>
    );
}
