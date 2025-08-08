import { Navbar, Container, Button } from "react-bootstrap";
import PlayerMini from "./PlayerMini";
import logo from "./logos/music.svg";

const Topbar = ({ onOpenMenu, currentTrack }) => {
    return (
        <Navbar bg="dark" variant="dark" expand="md" sticky="top" className="border-bottom">
            <Container fluid className="d-flex justify-content-between">
                <Button variant="bg-dark text-danger" className="d-lg-none me-2" onClick={onOpenMenu} aria-label="Apri menu">
                    <i className="bi bi-list fs-4"></i>
                </Button>
                <div className="d-none d-lg-block flex-grow-1">
                    <PlayerMini track={currentTrack} />
                </div>

                <div className="d-flex d-lg-none">
                    <img
                        src={logo}
                        alt="Logo"
                        style={{
                            filter: "invert(1)",
                        }}
                    />
                </div>
                <Button variant="dark text-danger fw-bold d-flex d-lg-none">Accedi</Button>
                <Button variant="danger text-white fw-bold d-none d-lg-flex">
                    <i class="bi bi-person-fill"></i> <span className="ms-2">Accedi</span>
                </Button>
            </Container>
        </Navbar>
    );
};

export default Topbar;
