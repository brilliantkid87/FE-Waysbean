import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Icon from '../assets/Icon (3).png';
import { Button } from 'react-bootstrap';
import LoginModal from '../login/modal';

function NavbarComponent() {

    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showRegisterModal, setShowRegisterModal] = useState(false)


    const handleCloseLoginModal = () => {
        setShowLoginModal(false)
    }

    const handleShowLoginModal = () => {
        setShowLoginModal(true)
    }

    const handleCloseRegisterModal = () => {
        setShowRegisterModal(false)
    }

    const handleShowRegisterModal = () => {
        setShowRegisterModal(true)
    }

    return (
        <>
            <Navbar style={{ background: '#F5F5F5', boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.25)', width: "100%", position: "fixed", zIndex: "20", top: "0", left: "0", right: "0" }}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={Icon} width="100" height="35" className="d-inline-block align-top" alt="React Bootstrap logo" />
                    </Navbar.Brand>
                    <div>
                        <Button style={{ width: "100px", height: "40px", border: "2px solid #613D2B", background: "#F5F5F5", marginRight: "5px", color: "#613D2B", borderRadius: "5px" }} onClick={handleShowLoginModal}>
                            Login
                        </Button>
                        <Button style={{ width: "100px", height: "40px", background: "#613D2B", borderRadius: "5px" }}>
                            Register
                        </Button>
                    </div>
                </Container>
            </Navbar>
            <LoginModal
                showModal={showLoginModal}
                handleCloseModal={handleCloseLoginModal}
            />
        </>
    );
}

export default NavbarComponent;
