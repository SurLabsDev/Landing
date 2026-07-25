"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { demos } from "@/lib/demos";

/** Velocidad del desplazamiento automático, en píxeles por segundo. */
const AUTO_PX_PER_SEC = 32;

/**
 * Galería de las 12 demos: scroll horizontal nativo con snap.
 *
 * Deliberadamente NO fija la sección ni secuestra el scroll vertical. El
 * visitante recorre al costado si le interesa y sigue bajando cuando quiere.
 * Al ser scroll nativo funciona igual con dedo, trackpad, rueda con shift y
 * teclado, sin ninguna librería de animación.
 *
 * Se desplaza solo, de corrido, para que se note que hay más demos al costado.
 * Es un deslizamiento continuo por requestAnimationFrame, no un salto de
 * tarjeta en tarjeta. Al llegar a un extremo cambia de sentido en vez de
 * rebobinar, aunque a esta velocidad hace falta más de un minuto sin tocar
 * nada para llegar ahí.
 *
 * Cuatro frenos: se detiene para siempre al primer gesto del usuario, se pausa
 * con el mouse encima o el foco adentro, no corre fuera de pantalla ni con la
 * pestaña en segundo plano, y no arranca nunca con prefers-reduced-motion.
 */

export function WorkTrack() {
    const track = useRef<HTMLDivElement>(null);
    const progress = useRef<HTMLDivElement>(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    /**
     * Auto-avance. `auto` es el interruptor definitivo: una vez que la persona
     * toca la galería no se vuelve a mover sola nunca más, porque a esa altura
     * ya descubrió que hay más al costado y seguir moviéndole el contenido solo
     * estorba. Las pausas temporales (hover, foco, fuera de pantalla, pestaña
     * en segundo plano) van por refs para no re-renderizar las 12 tarjetas.
     */
    const [auto, setAuto] = useState(true);
    const hovering = useRef(false);
    const focused = useRef(false);
    const onScreen = useRef(false);
    // Va y vuelve en lugar de rebobinar: rebobinar 3600px de golpe parece un bug.
    const dir = useRef<1 | -1>(1);

    const sync = useCallback(() => {
        const el = track.current;
        if (!el) return;
        const max = el.scrollWidth - el.clientWidth;
        const ratio = max > 0 ? el.scrollLeft / max : 0;
        // Se escribe directo en el DOM: si esto pasara por estado de React
        // re-renderizaría la lista entera en cada frame del scroll.
        if (progress.current) {
            progress.current.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
        }
        setAtStart(el.scrollLeft <= 2);
        setAtEnd(el.scrollLeft >= max - 2);
    }, []);

    useEffect(() => {
        sync();
        window.addEventListener("resize", sync);
        return () => window.removeEventListener("resize", sync);
    }, [sync]);

    const step = useCallback((delta: 1 | -1) => {
        const el = track.current;
        if (!el) return;
        const card = el.querySelector("[data-card]");
        const width = card ? card.getBoundingClientRect().width + 32 : el.clientWidth * 0.8;
        el.scrollBy({ left: delta * width, behavior: "smooth" });
    }, []);

    /** Corta el auto-avance para siempre. Lo llama cualquier gesto del usuario. */
    const stopAuto = useCallback(() => setAuto(false), []);

    // Solo se mueve cuando la sección está a la vista. Animar algo que nadie
    // está mirando gasta batería sin que sirva de nada.
    useEffect(() => {
        const el = track.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                onScreen.current = entry.isIntersecting;
            },
            { threshold: 0.25 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    useEffect(() => {
        if (!auto) return;
        // Con movimiento reducido no arranca nunca. No es negociable.
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        let raf = 0;
        let last = 0;
        // La posición se acumula acá en decimales. Si se leyera scrollLeft en
        // cada frame, a 32px/s el incremento es medio píxel y el redondeo del
        // navegador podría dejarlo clavado sin avanzar nunca.
        let pos = track.current?.scrollLeft ?? 0;

        const tick = (now: number) => {
            raf = requestAnimationFrame(tick);
            const el = track.current;
            if (!el) return;

            if (!last) {
                last = now;
                return;
            }
            // Techo al delta: si la pestaña estuvo dormida, que no pegue un salto.
            const dt = Math.min(now - last, 50);
            last = now;

            if (hovering.current || focused.current || !onScreen.current || document.hidden) {
                pos = el.scrollLeft;
                return;
            }

            const max = el.scrollWidth - el.clientWidth;
            if (max <= 0) return;

            pos += dir.current * AUTO_PX_PER_SEC * (dt / 1000);
            if (pos >= max) {
                pos = max;
                dir.current = -1;
            } else if (pos <= 0) {
                pos = 0;
                dir.current = 1;
            }
            el.scrollLeft = pos;
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [auto]);

    return (
        <div className="relative">
            <div className="mx-auto max-w-[1400px] px-5 md:px-10">
                <div className="animate-on-scroll">
                    <h2 className="type-display max-w-[16ch] text-[2.75rem] font-extrabold sm:text-5xl lg:text-6xl">
                        Probalo, no te lo cuento.
                    </h2>
                    <p className="type-body mt-6 max-w-[58ch] text-base leading-relaxed text-bone-dim lg:text-lg">
                        Doce productos funcionando, todos abiertos. Entrá al que se parezca a
                        tu rubro y usalo como si fuera tuyo.
                    </p>
                </div>

                <div className="mt-10 flex items-center gap-6">
                    <div className="h-px flex-1 bg-bone/12">
                        <div
                            ref={progress}
                            className="h-full origin-left scale-x-0 bg-ember transition-transform duration-150"
                            aria-hidden="true"
                        />
                    </div>

                    {/* Flechas para quien no tiene rueda horizontal. En mobile
                        sobran: el dedo ya hace el gesto. */}
                    <div className="hidden shrink-0 gap-2 md:flex">
                        <button
                            type="button"
                            onClick={() => { stopAuto(); step(-1); }}
                            disabled={atStart}
                            aria-label="Ver demos anteriores"
                            className="rounded-brand border border-bone/20 p-2.5 text-bone transition-colors hover:border-bone/50 hover:bg-bone/5 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-bone/20 disabled:hover:bg-transparent"
                        >
                            <ArrowLeft size={18} weight="bold" />
                        </button>
                        <button
                            type="button"
                            onClick={() => { stopAuto(); step(1); }}
                            disabled={atEnd}
                            aria-label="Ver más demos"
                            className="rounded-brand border border-bone/20 p-2.5 text-bone transition-colors hover:border-bone/50 hover:bg-bone/5 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-bone/20 disabled:hover:bg-transparent"
                        >
                            <ArrowRight size={18} weight="bold" />
                        </button>
                    </div>
                </div>
            </div>

            <div
                ref={track}
                onScroll={sync}
                // Pausas temporales: mientras mirás o navegás con teclado, quieto.
                onPointerEnter={() => (hovering.current = true)}
                onPointerLeave={() => (hovering.current = false)}
                onFocusCapture={() => (focused.current = true)}
                onBlurCapture={() => (focused.current = false)}
                // Freno definitivo: cualquier gesto propio gana sobre el automatismo.
                onWheel={stopAuto}
                onTouchStart={stopAuto}
                onPointerDown={stopAuto}
                onKeyDown={stopAuto}
                /*
                  El snap se activa recién cuando el automatismo se apaga: con
                  snap-mandatory encendido, el navegador pelea contra el
                  desplazamiento continuo y lo deja tironeando. Tampoco lleva
                  scroll-smooth en CSS, porque afectaría a los escritos directos
                  de scrollLeft; el andar suave de las flechas ya va pedido por
                  JS en scrollBy.
                */
                className={`track-scroll mt-10 flex gap-8 overflow-x-auto px-5 pb-2 md:px-10 ${
                    auto ? "" : "snap-x snap-mandatory"
                }`}
            >
                {demos.map((demo) => (
                    <a
                        key={demo.id}
                        data-card
                        href={demo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-brand group flex w-[80vw] max-w-[22rem] shrink-0 snap-start flex-col overflow-hidden border border-bone/12 bg-ink-raised transition-colors duration-300 hover:border-ember/60 lg:w-[26rem] lg:max-w-none"
                    >
                        <div className="relative overflow-hidden border-b border-bone/12">
                            <Image
                                src={demo.image}
                                alt={`Captura de la demo ${demo.title}`}
                                width={1440}
                                height={900}
                                sizes="(max-width: 1024px) 80vw, 26rem"
                                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                        </div>

                        <div className="flex flex-1 flex-col p-6">
                            <div className="flex items-baseline justify-between gap-4">
                                <h3 className="text-xl font-bold text-bone lg:text-2xl">
                                    {demo.title}
                                </h3>
                                <span className="type-label shrink-0 text-bone-faint">
                                    {demo.sector}
                                </span>
                            </div>
                            <p className="type-body mt-2.5 text-[0.9375rem] leading-relaxed text-bone-dim">
                                {demo.description}
                            </p>
                            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-bone transition-colors group-hover:text-ember">
                                Abrir demo
                                <ArrowUpRight
                                    size={16}
                                    weight="bold"
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </span>
                        </div>
                    </a>
                ))}

                {/* Respiro al final para que la última tarjeta no quede pegada al borde. */}
                <div aria-hidden="true" className="w-1 shrink-0 md:w-6" />
            </div>
        </div>
    );
}
