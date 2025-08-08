import { useState, useEffect } from "react";
import Section from "../Section";
import RadioCard from "./RadioCard";

const assets = [
    { cover: "src/assets/images/2a.png", title: "Prólogo con Abuelo" },
    { cover: "src/assets/images/2b.png", title: "The Wanderer" },
    { cover: "src/assets/images/2c.png", title: "Michael Bublé & Carly Pearce" },
    { cover: "src/assets/images/2d.png", title: "Stephan Moccio" },
    { cover: "src/assets/images/2e.png", title: "Chart Spotlight" },
    { cover: "src/assets/images/2f.png", title: "Karri & Travis Mills" },
];

function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < breakpoint);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [breakpoint]);
    return isMobile;
}

const RadioStations = () => {
    const isMobile = useIsMobile();
    const shownAssets = isMobile ? assets.slice(0, 3) : assets; // 👈 mostra solo 3 su mobile

    return (
        <Section title="Nuovi episodi radio">
            <div className="row g-3">
                {shownAssets.map((episode, i) => (
                    <div key={i} className="col-4 col-md-4 col-lg-2">
                        <RadioCard {...episode} />
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default RadioStations;
