import { Card, Ratio } from "react-bootstrap";

const RadioCard = ({ cover, title }) => {
    return (
        <Card as="a" href="#" className="h-100 text-start text-decoration-none text-reset">
            <Ratio aspectRatio="1x1" className="bg-black">
                {cover && <Card.Img src={cover} alt="" className="object-fit-cover" />}
            </Ratio>
            <Card.Body className="p-2">
                <Card.Title className="small fw-semibold text-truncate mb-0">{title}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default RadioCard;
