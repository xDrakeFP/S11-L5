import { Col, Card } from "react-bootstrap";

const ImageCard = ({ src, alt }) => (
    <Col md={12} className="snap-item mb-3">
        <Card className="border-0 bg-transparent w-100">
            <Card.Img src={src} alt={alt} style={{ borderRadius: 12 }} />
        </Card>
    </Col>
);

export default ImageCard;
