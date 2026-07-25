import {
    MagnifyingGlass,
    PenNib,
    Code,
    Lifebuoy,
} from "@phosphor-icons/react/dist/ssr";

/**
 * Sin cards y sin numerar los pasos: el verbo ya dice en qué etapa estás.
 * Familia de layout propia (línea horizontal con hitos), distinta del bento
 * de servicios y de la galería.
 */
const steps = [
    {
        title: "Entendemos el problema",
        body: "Miramos cómo trabajás hoy para encontrar dónde se te va el tiempo y acordar qué significa que esto salga bien.",
        icon: MagnifyingGlass,
    },
    {
        title: "Te pasamos el alcance",
        body: "Qué se hace, cuánto sale y cuándo está. Por escrito y antes de empezar.",
        icon: PenNib,
    },
    {
        title: "Construimos",
        body: "Lanzamos una primera versión que ya te sirva y la vamos ajustando con vos usándola.",
        icon: Code,
    },
    {
        title: "Te acompañamos",
        body: "Correcciones, mejoras y cambios cuando el negocio los pide. Somos tu brazo técnico.",
        icon: Lifebuoy,
    },
];

export function Process() {
    return (
        <section
            id="metodologia"
            className="border-t border-bone/12 bg-ink-sunken py-24 lg:py-32"
        >
            <div className="mx-auto max-w-[1400px] px-5 md:px-10">
                <div className="animate-on-scroll">
                    <h2 className="type-display max-w-[18ch] text-[2.75rem] font-extrabold sm:text-5xl lg:text-6xl">
                        Cómo trabajamos.
                    </h2>
                    <p className="type-body mt-6 max-w-[58ch] text-base leading-relaxed text-bone-dim lg:text-lg">
                        Cuatro etapas, sin sorpresas en el medio. Vas a saber siempre en cuál
                        estamos.
                    </p>
                </div>

                <div className="relative mt-20">
                    {/* Hilo que conecta las etapas. Se dibuja al entrar en pantalla. */}
                    <div className="absolute left-0 top-[15px] hidden h-px w-full bg-bone/12 lg:block">
                        <div className="animate-line-x h-full w-full origin-left bg-ember" />
                    </div>
                    <div className="absolute left-[15px] top-0 h-full w-px bg-bone/12 lg:hidden">
                        <div className="animate-line-y h-full w-full origin-top bg-ember" />
                    </div>

                    <ol className="grid grid-cols-1 gap-14 lg:grid-cols-4 lg:gap-10">
                        {steps.map((step, i) => {
                            const Icon = step.icon;
                            return (
                                <li
                                    key={step.title}
                                    className="animate-on-scroll relative pl-14 lg:pl-0"
                                    style={{ transitionDelay: `${i * 110}ms` }}
                                >
                                    {/* Hito sobre el hilo. Lleva el fondo para tapar la línea. */}
                                    <div className="absolute left-0 top-0 flex h-[31px] w-[31px] items-center justify-center bg-ink-sunken lg:relative">
                                        <Icon
                                            size={26}
                                            weight="light"
                                            className="text-ember"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <h3 className="type-display mt-0 text-xl font-bold lg:mt-8 lg:text-2xl">
                                        {step.title}
                                    </h3>
                                    <p className="type-body mt-3 max-w-[34ch] text-[0.9375rem] leading-relaxed text-bone-dim">
                                        {step.body}
                                    </p>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </section>
    );
}
