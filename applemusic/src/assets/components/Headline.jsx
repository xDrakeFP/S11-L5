import { Col } from "react-bootstrap";

const Headline = ({ subtitle, text }) => (
    <Col md={3} className="snap-item mb-3">
        <div className="border-bottom border-secondary pb-2">
            <p className="text-uppercase small text-secondary mb-1">{subtitle}</p>
            <p className="mb-0 fw-semibold text-light">{text}</p>
        </div>
    </Col>
);

export default Headline;
