import { Col, Row, Container } from "react-bootstrap";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import MobilePlayer from "./MobilePlayer";
import { useState } from "react";

import MyFooter from "../MyFooter";

const Layout = ({ children, currentTrack }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Container fluid className="p-0">
            <Row className="g-0" style={{ minHeight: "100vh" }}>
                <Col lg={2} className="p-0">
                    <Sidebar desktop={true} mobile={false} />
                </Col>

                <Col lg={10} className=" d-flex flex-column">
                    <Topbar onOpenMenu={() => setMenuOpen(true)} currentTrack={currentTrack} />
                    <Sidebar desktop={false} mobile={true} mobileShow={menuOpen} onMobileHide={() => setMenuOpen(false)} />

                    <div className="flex-grow-1 pb-3 main-with-mobile-player">
                        <div className="container-fluid px-2 px-md-3 px-lg-4">{children}</div>
                    </div>
                    <MyFooter />
                </Col>
            </Row>
            <MobilePlayer track={currentTrack} />
        </Container>
    );
};

export default Layout;
