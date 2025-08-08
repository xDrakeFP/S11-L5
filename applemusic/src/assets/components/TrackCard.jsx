import { Card } from "react-bootstrap";
const TrackCard = ({ track, onPlay }) => {
    return (
        <Card onClick={() => onPlay?.(track)} style={{ cursor: "pointer" }}>
            <Card.Img variant="top" src={track?.album?.cover_medium} />
            <Card.Body className="p-0 lh-1">
                <Card.Title className="fs-6 text-secondary fw-bold text-truncate">{track?.title}</Card.Title>
                <Card.Text className="text-secondary text-truncate">{track?.artist?.name}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default TrackCard;
