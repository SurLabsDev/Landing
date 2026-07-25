/**
 * Marca Surlabs: una aguja de brújula apuntando al SUR, no al norte.
 * Dice de dónde somos sin escribirlo.
 *
 * La aguja es un rombo bipuntado: la mitad que apunta al sur va sólida en
 * ember, la que apunta al norte queda apagada. Al hacer hover sobre el
 * lockup, la aguja se acomoda (ver .needle en globals.css).
 */
export function LogoMark({ className = "h-6 w-6" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className={className}
            fill="none"
            aria-hidden="true"
            focusable="false"
        >
            {/* Rosa de los vientos */}
            <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.25" />
            {/* Ejes cardinales, apenas insinuados */}
            <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.25" strokeLinecap="square" />
            <g className="needle" style={{ transformOrigin: "12px 12px" }}>
                {/* Mitad norte: apagada */}
                <path d="M12 3.6 15.1 12H8.9L12 3.6Z" fill="currentColor" fillOpacity="0.25" />
                {/* Mitad sur: el acento. Es el punto del logo. */}
                <path d="M12 20.4 8.9 12h6.2L12 20.4Z" fill="var(--color-ember)" />
            </g>
        </svg>
    );
}

export function Logo({ className = "" }: { className?: string }) {
    return (
        <span className={`group inline-flex items-center gap-2.5 ${className}`}>
            <LogoMark className="h-7 w-7 text-bone" />
            <span
                className="text-[1.35rem] font-extrabold leading-none text-bone"
                style={{ fontVariationSettings: '"wdth" 82', letterSpacing: "-0.045em" }}
            >
                surlabs
            </span>
        </span>
    );
}
