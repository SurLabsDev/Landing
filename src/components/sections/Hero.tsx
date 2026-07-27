import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { EV } from "@/lib/track";

/**
 * Hero tipográfico, sin imagen.
 *
 * Ocupa la pantalla completa (100dvh) para que la sección siguiente no asome
 * por abajo: ese pedacito de titular cortado le sacaba seriedad.
 *
 * Ahora bien, ocupar la pantalla entera con un bloque compacto centrado fue lo
 * que antes se leía como "sobra espacio". Por eso el contenido NO va centrado:
 * se reparte a lo alto a propósito, con el titular arriba y la línea, el texto
 * y los botones anclados abajo. El aire queda entre dos bloques anclados, que
 * es composición editorial, y no alrededor de uno flotando, que es un error.
 *
 * Sin imagen sobre la línea de flotación el LCP pasa a ser el texto, que es lo
 * más rápido que puede pintar un navegador.
 */
export function Hero() {
    return (
        <section className="relative flex min-h-[100dvh] flex-col overflow-hidden pt-[68px]">
            <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-between gap-12 px-5 pb-14 pt-12 md:px-10 lg:pb-20 lg:pt-16">
                {/* El ancho está calibrado para que entre en 2 líneas en desktop. */}
                <h1 className="animate-rise type-display-tight max-w-[24ch] text-[3.25rem] font-extrabold sm:text-6xl lg:text-[5.25rem] xl:text-[6.5rem]">
                    El software que tu negocio todavía hace{" "}
                    <span className="text-ember">a mano</span>.
                </h1>

                <div className="animate-rise" style={{ animationDelay: "140ms" }}>
                    {/* Línea de acento: separa los dos bloques anclados. */}
                    <div className="animate-line-x h-px w-full max-w-[38rem] origin-left bg-ember" />

                    <p className="type-body mt-8 max-w-[52ch] text-lg leading-relaxed text-bone-dim lg:text-xl">
                        Diseñamos y construimos las herramientas que tu equipo usa todos los
                        días. Reservas, pedidos, clientes y stock.
                    </p>

                    <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                        <Link
                            href="#contacto"
                            data-ev={EV.ctaHero}
                            className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-brand bg-ember px-8 py-4 text-base font-bold text-ink transition-colors hover:bg-ember-hot active:translate-y-px"
                        >
                            Hablemos
                            <ArrowRight
                                size={18}
                                weight="bold"
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                        <Link
                            href="#proyectos"
                            data-ev={EV.ctaWork}
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-brand border border-bone/25 px-8 py-4 text-base font-semibold text-bone transition-colors hover:border-bone/60 hover:bg-bone/5 active:translate-y-px"
                        >
                            Ver el trabajo
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
