import { WorkTrack } from "./WorkTrack";

export function Work() {
    return (
        <section id="proyectos" className="py-24 lg:py-32">
            {/* #demos apuntaba a la sección vieja. Se preserva para no romper links. */}
            <span id="demos" aria-hidden="true" className="block" />
            <WorkTrack />
        </section>
    );
}
