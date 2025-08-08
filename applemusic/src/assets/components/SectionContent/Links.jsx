import { Row, Col, Button } from "react-bootstrap";
import Section from "../Section";

const links = ["Esplora per genere", "Decenni", "Attività e stati d'animo", "Worldwide", "Classifiche", "Audio spaziale", "Video musicali", "Nuovi artisti", "Hit del passato"];

const Links = () => {
    return (
        <Section title="Altro da esplorare">
            <Row className="g-3">
                {links.map((l) => (
                    <Col key={l} xs={12} md={6} lg={4}>
                        <Button href="#" variant="dark " className=" d-flex align-items-center justify-content-between w-100 px-3 py-3 rounded-3 text-danger">
                            <span>{l}</span>
                            <i className="bi bi-chevron-right"></i>
                        </Button>
                    </Col>
                ))}
            </Row>
        </Section>
    );
};

export default Links;
