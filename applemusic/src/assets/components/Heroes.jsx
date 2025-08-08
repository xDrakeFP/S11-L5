import { useRef } from "react";
import { Row } from "react-bootstrap";
import ImageCard from "./HeroImage";
import Hero1 from "../images/1a.png";
import Hero2 from "../images/1b.png";
import { Button } from "react-bootstrap";

const defaultItems = [
    { src: Hero1, alt: "Musicaaa" },
    { src: Hero2, alt: "Músicaaa" },
    { src: Hero1, alt: "Musicaaa" },
    { src: Hero2, alt: "Músicaaa" },
    { src: Hero1, alt: "Musicaaa" },
    { src: Hero2, alt: "Músicaaa" },
    { src: Hero1, alt: "Musicaaa" },
    { src: Hero2, alt: "Músicaaa" },
    { src: Hero1, alt: "Musicaaa" },
    { src: Hero2, alt: "Músicaaa" },
];

export default function HeroesRow({ items = defaultItems }) {
    const ref = useRef(null);

    const scrollByWidth = (dir = 1) => {
        const el = ref.current;
        if (!el) return;
        const amount = el.clientWidth * 0.95 * dir;
        el.scrollBy({ left: amount, behavior: "smooth" });
    };

    return (
        <div className="position-relative z-3 ">
            <div className="d-none d-md-flex gap-2 position-absolute bottom-0 heroes-arrows">
                <Button size="sm" variant="dark" onClick={() => scrollByWidth(-1)} aria-label="Precedente">
                    <i className="bi bi-chevron-left" />
                </Button>
                <Button size="sm" variant="dark" onClick={() => scrollByWidth(1)} aria-label="Successivo">
                    <i className="bi bi-chevron-right" />
                </Button>
            </div>

            <Row ref={ref} className="snap-row heroes-row flex-nowrap g-3">
                {items.map((it, i) => (
                    <ImageCard key={i} src={it.src} alt={it.alt} />
                ))}
            </Row>
        </div>
    );
}
