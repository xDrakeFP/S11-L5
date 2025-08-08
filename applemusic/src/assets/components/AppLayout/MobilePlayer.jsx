import { Navbar, Container } from "react-bootstrap";

import PlayerMini from "./PlayerMini";

const MobilePlayer = ({ track }) => {
    return (
        <Navbar bg="dark" variant="dark" fixed="bottom" className="d-lg-none border-top">
            <Container fluid>
                <PlayerMini track={track} />
            </Container>
        </Navbar>
    );
};

export default MobilePlayer;
