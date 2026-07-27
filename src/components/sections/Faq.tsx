import { faq } from "@/lib/faq";

/**
 * Preguntas frecuentes.
 *
 * FAMILIA DE LAYOUT PROPIA: filas separadas por reglas, con la pregunta a la
 * izquierda y la respuesta a la derecha. Es un formato de índice o de ficha
 * técnica, distinto del bento de servicios, de la línea de tiempo del proceso,
 * de la galería y del split del formulario. Además le va bien a la marca: la
 * promesa del sitio es "todo por escrito y sin vueltas", y esto se lee como un
 * documento, no como una pieza de venta.
 *
 * SIN ACORDEÓN, A PROPÓSITO. Un <details> ahorra alto pero esconde el texto
 * detrás de un clic, y acá el texto es justamente el activo: es lo que un
 * buscador indexa y lo que un asistente de IA puede citar. Todo visible también
 * evita que el schema de FAQPage marque contenido que el visitante no ve, que
 * es motivo de penalización.
 *
 * El orden no es casual: arranca por el precio, que es siempre la primera
 * pregunta de un dueño de negocio.
 */
export function Faq() {
    return (
        <section
            id="preguntas"
            className="border-t border-bone/12 py-24 lg:py-32"
        >
            <div className="mx-auto max-w-[1400px] px-5 md:px-10">
                <div className="animate-on-scroll">
                    <h2 className="type-display max-w-[20ch] text-[2.75rem] font-extrabold sm:text-5xl lg:text-6xl">
                        Lo que todos preguntan.
                    </h2>
                    <p className="type-body mt-6 max-w-[58ch] text-base leading-relaxed text-bone-dim lg:text-lg">
                        Las dudas con las que llega casi todo el mundo, contestadas antes de
                        que tengas que escribir para averiguarlas.
                    </p>
                </div>

                <dl className="mt-16 border-t border-bone/12">
                    {faq.map((item, i) => (
                        <div
                            key={item.question}
                            className="animate-on-scroll grid grid-cols-1 gap-3 border-b border-bone/12 py-8 lg:grid-cols-12 lg:gap-12 lg:py-10"
                            style={{ transitionDelay: `${Math.min(i, 4) * 70}ms` }}
                        >
                            <dt className="type-display text-xl font-bold text-bone lg:col-span-5 lg:text-2xl">
                                {item.question}
                            </dt>
                            <dd className="type-body max-w-[62ch] text-[0.9375rem] leading-relaxed text-bone-dim lg:col-span-7 lg:text-base">
                                {item.answer}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
