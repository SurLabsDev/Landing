import { Terminal, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 w-fit mb-4">
                            <Terminal className="w-5 h-5 text-surlabs-accent" />
                            <span className="font-mono font-bold text-lg tracking-tighter">
                                SUR<span className="text-surlabs-accent">LABS</span>
                            </span>
                        </Link>
                        <p className="text-foreground/60 text-sm max-w-sm mb-6">
                            Ingeniería de software premium. Diseñamos, construimos y escalamos
                            plataformas digitales para empresas que exigen excelencia técnica.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-foreground/40 hover:text-surlabs-accent transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-foreground/40 hover:text-surlabs-secondary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-foreground/40 hover:text-surlabs-accent transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Empresa</h4>
                        <ul className="space-y-3 text-sm text-foreground/60">
                            <li><Link href="#proyectos" className="hover:text-foreground transition-colors">Proyectos</Link></li>
                            <li><Link href="#servicios" className="hover:text-foreground transition-colors">Servicios</Link></li>
                            <li><Link href="#metodologia" className="hover:text-foreground transition-colors">Metodología</Link></li>
                            <li><Link href="#contacto" className="hover:text-foreground transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Legal</h4>
                        <ul className="space-y-3 text-sm text-foreground/60">
                            <li><a href="#" className="hover:text-foreground transition-colors">Privacidad</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Términos</a></li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-foreground/40">
                    <p>© {currentYear} Surlabs Software Factory. Todos los derechos reservados.</p>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Sistemas Operativos
                    </div>
                </div>
            </div>
        </footer>
    );
}
