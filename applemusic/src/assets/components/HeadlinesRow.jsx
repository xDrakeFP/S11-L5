// src/components/HeadlinesRow.jsx
import { useRef } from "react";
import { Row } from "react-bootstrap";
import Headline from "./Headline";

const defaultItems = [
    {
        subtitle: "NUOVA STAZIONE RADIO",
        text: "Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill",
    },
    {
        subtitle: "NUOVA STAZIONE RADIO",
        text: "Ecco la nuova casa della musica latina",
    },
    {
        subtitle: "NUOVA STAZIONE RADIO",
        text: "Ecco la nuova casa della musica latina",
    },
    {
        subtitle: "NUOVA STAZIONE RADIO",
        text: "Ecco la nuova casa della musica latina",
    },
    {
        subtitle: "NUOVA STAZIONE RADIO",
        text: "Ecco la nuova casa della musica latina",
    },
];

const HeadlinesRow = ({ items = defaultItems }) => {
    const ref = useRef(null);

    return (
        <div className="position-relative mb-3">
            <Row ref={ref} className="snap-row flex-nowrap g-3">
                {items.map((it, i) => (
                    <Headline key={i} subtitle={it.subtitle} text={it.text} />
                ))}
            </Row>
        </div>
    );
};

export default HeadlinesRow;
