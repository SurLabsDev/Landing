"use client";

import { useState } from "react";
import {
    WhatsappLogo,
    EnvelopeSimple,
    MapPin,
    PaperPlaneTilt,
    ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY, CONTACT_EMAIL } from "@/lib/demos";

type Status = "idle" | "opening" | "blocked";

const initial = {
    name: "",
    email: "",
    company: "",
    companyType: "",
    message: "",
};

function buildWhatsappUrl(data: typeof initial) {
    const text =
        `Hola, soy ${data.name} de ${data.company}.\n\n${data.message}\n\n` +
        `Correo: ${data.email} | Rubro: ${data.companyType}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function Contact() {
    // Los campos y su orden se conservan del formulario anterior a propósito.
    const [formData, setFormData] = useState(initial);
    const [status, setStatus] = useState<Status>("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("opening");

        const url = buildWhatsappUrl(formData);
        const win = window.open(url, "_blank", "noopener,noreferrer");

        // Si el navegador bloqueó la ventana emergente el mensaje se pierde en
        // silencio. Detectarlo y ofrecer el enlace directo evita perder el lead.
        if (!win || win.closed) {
            setStatus("blocked");
        } else {
            setStatus("idle");
        }
    };

    const field =
        "rounded-brand w-full border border-bone/20 bg-ink-raised px-4 py-3 text-bone transition-colors placeholder:text-bone-dim hover:border-bone/35 focus:border-ember focus:outline-none";
    const label = "mb-2 block text-sm font-medium text-bone-dim";

    return (
        <section id="contacto" className="border-t border-bone/12 py-24 lg:py-32">
            <div className="mx-auto max-w-[1400px] px-5 md:px-10">
                <div className="animate-on-scroll">
                    <h2 className="type-display max-w-[20ch] text-[2.75rem] font-extrabold sm:text-5xl lg:text-7xl">
                        Hablemos.
                    </h2>
                    <p className="type-body mt-6 max-w-[46ch] text-lg leading-relaxed text-bone-dim">
                        Contanos qué parte de tu negocio te está costando. Si podemos
                        resolverlo te lo decimos, y si no, también.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
                    {/* Canal principal. WhatsApp va primero y va grande. */}
                    <div className="animate-on-scroll lg:col-span-5">
                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-brand group flex items-center justify-between gap-6 bg-ember p-7 transition-colors hover:bg-ember-hot lg:p-8"
                        >
                            <span className="flex items-center gap-4">
                                <WhatsappLogo size={38} weight="fill" className="shrink-0 text-ink" />
                                <span>
                                    <span className="type-display block text-2xl font-extrabold text-ink lg:text-3xl">
                                        Escribinos ahora
                                    </span>
                                    <span className="mt-1 block font-mono text-sm text-ink/75">
                                        {WHATSAPP_DISPLAY}
                                    </span>
                                </span>
                            </span>
                            <ArrowUpRight
                                size={26}
                                weight="bold"
                                className="shrink-0 text-ink transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </a>

                        <p className="type-body mt-5 text-[0.9375rem] leading-relaxed text-bone-dim">
                            Es la vía más rápida. Contestamos en el transcurso del día.
                        </p>

                        <dl className="mt-10 divide-y divide-bone/12 border-t border-bone/12">
                            <div className="flex items-center gap-4 py-5">
                                <EnvelopeSimple size={22} weight="light" className="shrink-0 text-bone-dim" />
                                <div>
                                    <dt className="sr-only">Correo</dt>
                                    <dd>
                                        <a
                                            href={`mailto:${CONTACT_EMAIL}`}
                                            className="link-underline text-bone"
                                        >
                                            {CONTACT_EMAIL}
                                        </a>
                                    </dd>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 py-5">
                                <MapPin size={22} weight="light" className="shrink-0 text-bone-dim" />
                                <div>
                                    <dt className="sr-only">Dónde estamos</dt>
                                    <dd className="text-bone">Montevideo, Uruguay</dd>
                                </div>
                            </div>
                        </dl>
                    </div>

                    {/* Formulario: para quien prefiere dejar todo escrito de una. */}
                    <div className="animate-on-scroll lg:col-span-7" style={{ transitionDelay: "120ms" }}>
                        <form onSubmit={handleSubmit} noValidate={false} className="rounded-brand border border-bone/12 p-6 lg:p-8">
                            <p className="type-body mb-7 text-[0.9375rem] leading-relaxed text-bone-dim">
                                Completá y te abrimos el WhatsApp con el mensaje ya escrito.
                            </p>

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className={label}>
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        autoComplete="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className={field}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className={label}>
                                        Correo
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        autoComplete="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className={field}
                                    />
                                </div>
                            </div>

                            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="company" className={label}>
                                        Tu negocio
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        required
                                        autoComplete="organization"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className={field}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="companyType" className={label}>
                                        Rubro
                                    </label>
                                    <select
                                        id="companyType"
                                        name="companyType"
                                        required
                                        value={formData.companyType}
                                        onChange={(e) =>
                                            setFormData({ ...formData, companyType: e.target.value })
                                        }
                                        className={`${field} appearance-none`}
                                    >
                                        <option value="" disabled>
                                            Elegí una opción
                                        </option>
                                        <option value="Gastronomía">Gastronomía</option>
                                        <option value="Comercio o retail">Comercio o retail</option>
                                        <option value="Servicios profesionales">Servicios profesionales</option>
                                        <option value="Salud o bienestar">Salud o bienestar</option>
                                        <option value="Inmobiliaria">Inmobiliaria</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-5">
                                <label htmlFor="message" className={label}>
                                    Qué necesitás resolver
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Tengo un restaurante y quiero que la gente reserve sin tener que llamar."
                                    className={`${field} resize-none`}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "opening"}
                                className="rounded-brand mt-7 flex w-full items-center justify-center gap-2.5 bg-ember px-6 py-4 text-base font-bold text-ink transition-colors hover:bg-ember-hot active:translate-y-px disabled:opacity-70"
                            >
                                {status === "opening" ? "Abriendo WhatsApp" : "Enviar por WhatsApp"}
                                <PaperPlaneTilt size={18} weight="bold" />
                            </button>

                            {status === "blocked" && (
                                <p
                                    role="alert"
                                    className="rounded-brand mt-4 border border-ember/50 bg-ember/10 px-4 py-3 text-sm text-bone"
                                >
                                    El navegador bloqueó la ventana.{" "}
                                    <a
                                        href={buildWhatsappUrl(formData)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-underline font-semibold"
                                    >
                                        Abrir el chat manualmente
                                    </a>
                                    .
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
