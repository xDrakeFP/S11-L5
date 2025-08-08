import { useEffect, useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import Section from "../Section";
import TrackCard from "../TrackCard";
import ApiCall from "../ApiCall";

const useIsMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < breakpoint);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [breakpoint]);
    return isMobile;
};

const query = "Pino Daniele";

const NewReleases = ({ onPlay }) => {
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);
    const isMobile = useIsMobile(768);

    useEffect(() => {
        (async () => {
            try {
                const data = await ApiCall(query);
                setTracks(data.slice(0, 12));
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const shown = isMobile ? tracks.slice(0, 6) : tracks;
    return (
        <Section title={query}>
            {loading ? (
                <Spinner animation="border" variant="light" />
            ) : (
                <Row className="g-3">
                    {shown.map((track) => (
                        <Col key={track.id} xs={4} md={3} lg={2}>
                            <TrackCard track={track} onPlay={onPlay} />
                        </Col>
                    ))}
                </Row>
            )}
        </Section>
    );
};

export default NewReleases;
