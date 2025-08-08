import { Offcanvas, Nav, Form, InputGroup, Button } from "react-bootstrap";

import musicLogo from "./logos/music.svg";

const items = [
    { label: "Home", icon: "house" },
    { label: "Novità", icon: "stars" },
    { label: "Radio", icon: "broadcast" },
];

const List = () => (
    <Nav className="flex-column">
        {items.map((it) => (
            <Nav.Link key={it.label} href="#" className="text-white py-2 w-100">
                <Button variant="dark" className="py-1 d-flex align-items-center justify-content-start fs-5 w-100">
                    <i className={`bi bi-${it.icon} text-danger me-2`}></i>
                    {it.label}
                </Button>
            </Nav.Link>
        ))}
    </Nav>
);

const SidebarContent = () => (
    <>
        <div className="d-flex align-items-center mb-2">
            <img src={musicLogo} alt="Music" style={{ height: "24px", width: "auto", filter: "invert(1)" }} />
        </div>

        <InputGroup className="my-2">
            <InputGroup.Text className="bg-black border-0 text-danger">
                <i className="bi bi-search"></i>
            </InputGroup.Text>
            <Form.Control
                type="text"
                placeholder="Cerca"
                className="bg-black border-0 text-white custom-placeholder"
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        console.log("Ricerca:", e.target.value);
                    }
                }}
            />
        </InputGroup>

        <List />
    </>
);

const Sidebar = ({ mobileShow = false, onMobileHide }) => (
    <>
        <div
            className="d-none d-lg-flex flex-column gap-3 p-3 bg-dark text-white"
            style={{
                height: "100vh",
                position: "fixed",
                top: 0,
                left: 0,
                width: "16.6667%",
                borderRight: "1px solid #2a2a2f",
            }}
        >
            <SidebarContent />
        </div>

        <Offcanvas show={mobileShow} onHide={onMobileHide} placement="start" className="bg-dark text-white d-lg-none">
            <Offcanvas.Body>
                <SidebarContent />
            </Offcanvas.Body>
        </Offcanvas>
    </>
);

export default Sidebar;
