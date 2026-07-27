"use client";

import { useEffect } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { evReach, evSource, trackEvent } from "@/lib/track";

/**
 * Único punto de medición del sitio.
 *
 * Junta tres cosas que en el fondo son la misma: las vistas y el embudo de
 * Vercel Web Analytics, las métricas de carga reales de Speed Insights, y el
 * registro de las conversiones (ver src/lib/track.ts para por qué van como
 * vistas sintéticas y no como eventos personalizados).
 *
 * Dos observadores para toda la página, igual que ScrollAnimator: un solo
 * listener de clic delegado en document y un solo IntersectionObserver. Nada de
 * escuchar scroll, que corre en cada frame y genera jank.
 *
 * DELEGACIÓN, Y POR QUÉ IMPORTA
 * Los enlaces que se miden no llevan onClick: llevan un atributo `data-ev` y es
 * este listener el que lo lee. Gracias a eso Hero, Services y Footer siguen
 * siendo Server Components. Con un onClick por botón habría que marcarlos
 * "use client" y se caería la regla del proyecto de tener solo cuatro
 * componentes de cliente. Además no agrega ni un byte de JavaScript por enlace.
 *
 * Para agregar un enlace a la medición alcanza con ponerle data-ev="algo", con
 * un nombre de src/lib/track.ts. No hay que tocar este archivo.
 */

/** Secciones del embudo. Las claves son los anclas que ya existen en la página. */
const SECTIONS: Record<string, string> = {
    proyectos: "work",
    servicios: "services",
    metodologia: "process",
    preguntas: "faq",
    contacto: "contact",
};

export function Metrics({ mode }: { mode: "production" | "development" }) {
    // De dónde vino la visita. Va primero porque es la única medición que se
    // pierde para siempre si no se toma en la carga.
    useEffect(() => {
        const src = new URLSearchParams(window.location.search).get("utm_source");
        const ev = src && evSource(src);
        if (ev) trackEvent(ev);
    }, []);

    // Clics. En fase de captura para que ningún handler intermedio que corte la
    // propagación pueda dejarnos sin el dato.
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            const el = (e.target as Element | null)?.closest?.("[data-ev]");
            const name = el?.getAttribute("data-ev");
            if (name) trackEvent(name);
        };
        document.addEventListener("click", onClick, { capture: true });
        return () => document.removeEventListener("click", onClick, { capture: true });
    }, []);

    // Secciones alcanzadas. Cada una se registra una sola vez por visita: sin el
    // unobserve, subir y bajar la página inflaría los números y la cuota.
    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue;
                    const key = SECTIONS[entry.target.id];
                    if (key) trackEvent(evReach(key));
                    io.unobserve(entry.target);
                }
            },
            // Un cuarto de sección a la vista ya cuenta como haber llegado.
            { threshold: 0.25 }
        );

        for (const id of Object.keys(SECTIONS)) {
            const el = document.getElementById(id);
            if (el) io.observe(el);
        }
        return () => io.disconnect();
    }, []);

    return (
        <>
            {/*
              En preview la medición queda en modo depuración: escribe en la
              consola y no manda nada. Los 50.000 eventos mensuales del plan
              gratuito son de todo el equipo junto, no de este proyecto, y sin
              esto cada rama que abrimos en el navegador se los come. Vercel no
              tiene una opción para apagarlo solo en preview.
            */}
            <VercelAnalytics mode={mode} />

            {/*
              Speed Insights mide la carga real de los visitantes. Va solo en
              producción: tiene su propia cuota, mucho más chica (10.000 datos
              por mes, y una visita gasta varios), así que no se gasta en
              pruebas. Además el plan gratuito lo permite en un solo proyecto.
            */}
            {mode === "production" && <SpeedInsights />}
        </>
    );
}
