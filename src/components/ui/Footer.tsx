import Link from "next/link";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/brand/Logo";
import { WHATSAPP_NUMBER, CONTACT_EMAIL } from "@/lib/demos";

/**
 * Los enlaces a redes que había antes apuntaban todos a "#". Se quitaron:
 * un enlace muerto cuesta más credibilidad de la que suma un ícono.
 */
const links = [
    { href: "#proyectos", label: "Trabajo" },
    { href: "#servicios", label: "Servicios" },
    { href: "#metodologia", label: "Proceso" },
    { href: "#contacto", label: "Hablemos" },
];

export function Footer() {
    return (
        <footer className="border-t border-bone/12 bg-ink-sunken">
            <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-sm">
                        <Link href="/" aria-label="Surlabs, inicio">
                            <Logo />
                        </Link>
                        <p className="type-body mt-5 text-[0.9375rem] leading-relaxed text-bone-dim">
                            Construimos software a medida para negocios que crecieron más
                            rápido que sus herramientas. Montevideo, Uruguay.
                        </p>
                    </div>

                    <div className="flex flex-col gap-10 sm:flex-row sm:gap-20">
                        <nav>
                            <h2 className="type-label mb-5 text-bone-faint">Secciones</h2>
                            <ul className="flex flex-col gap-3">
                                {links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="link-underline text-[0.9375rem] text-bone-dim transition-colors hover:text-bone"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div>
                            <h2 className="type-label mb-5 text-bone-faint">Contacto</h2>
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <a
                                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-[0.9375rem] text-bone-dim transition-colors hover:text-bone"
                                    >
                                        <WhatsappLogo size={18} weight="fill" aria-hidden="true" />
                                        WhatsApp
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`mailto:${CONTACT_EMAIL}`}
                                        className="link-underline text-[0.9375rem] text-bone-dim transition-colors hover:text-bone"
                                    >
                                        {CONTACT_EMAIL}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-bone/12 pt-7">
                    <p className="text-sm text-bone-faint">
                        © {new Date().getFullYear()} Surlabs
                    </p>
                </div>
            </div>
        </footer>
    );
}
