import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "./assets/components/AppLayout/Layout";
import Section from "./assets/components/Section";
import NewReleases from "./assets/components/SectionContent/NewReleases";
import Links from "./assets/components/SectionContent/Links";
import HeadlinesRow from "./assets/components/HeadlinesRow";
import RadioStations from "./assets/components/SectionContent/RadioStations";
import HeroesRow from "./assets/components/Heroes";

import "./App.css";
import { Container, Col, Row } from "react-bootstrap";

function App() {
    const [current, setCurrent] = useState(null);

    return (
        <Layout currentTrack={current}>
            <Container fluid className="p-0">
                <Section title="Novità">
                    <hr />
                    <Container fluid>
                        <Row>
                            <Col>
                                <HeadlinesRow />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <HeroesRow />
                            </Col>
                        </Row>
                    </Container>
                </Section>
                <RadioStations />
                <NewReleases onPlay={setCurrent} />
                <Links />
            </Container>
        </Layout>
    );
}

export default App;
