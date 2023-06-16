// import React, { useContext, useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Icon from '../assets/Icon (3).png';
// import { Button } from 'react-bootstrap';
// import LoginModal from '../login/modal';
// import { UserContext, userContext } from '../../context/userContext';
// import { useNavigate } from 'react-router-dom';
// import ProfileDropdown from '../dropdown/user-dropdown';
// import ProfileDropdownAdmin from '../dropdown/admin-dropdown';
// import RegisterComp from '../register/register';

// function NavbarComponent() {
//     const [state, dispatch] = useContext(UserContext);
//     const [showLoginModal, setShowLoginModal] = useState(false);
//     const [showRegisterModal, setShowRegisterModal] = useState(false);
//     const [cartItems, setCartItems] = useState(0);

//     let navigate = useNavigate();

//     const handleCloseLoginModal = () => {
//         setShowLoginModal(false);
//     };

//     const handleShowLoginModal = () => {
//         setShowLoginModal(true);
//     };

//     const handleCloseRegisterModal = () => {
//         setShowRegisterModal(false);
//     };

//     const handleShowRegisterModal = () => {
//         setShowRegisterModal(true);
//     };

//     const handleLogout = () => {
//         dispatch({
//             type: 'LOGOUT',
//         });
//         localStorage.removeItem('login');
//         window.location.href = '/';
//     };

//     const handleAddToCart = () => {
//         setCartItems(cartItems + 1);
//     }
//     return (
//         <>
//             <Navbar
//                 style={{
//                     background: '#F5F5F5',
//                     boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.25)',
//                     width: '100%',
//                     position: 'fixed',
//                     zIndex: '20',
//                     top: '0',
//                     left: '0',
//                     right: '0',
//                 }}
//             >
//                 <Container>
//                     <Navbar.Brand href="/">
//                         <img
//                             src={Icon}
//                             width="100"
//                             height="35"
//                             className="d-inline-block align-top"
//                             alt="React Bootstrap logo"
//                         />
//                     </Navbar.Brand>
//                     <div style={{ display: 'flex', alignItems: 'center' }}>
//                         {state.isLogin && state.role === 'customer' && (
//                             <div style={{ marginRight: '10px' }}>
//                                 <i class="fa-solid fa-cart-shopping"></i>
//                                 <span style={{ fontWeight: 'bold' }}>{cartItems}</span>
//                             </div>
//                         )}
//                         {state.isLogin && state.role === 'customer' ? (
//                             <ProfileDropdown handleLogout={handleLogout} />
//                         ) : state.isLogin && state.role === 'admin' ? (
//                             <ProfileDropdownAdmin handleLogout={handleLogout} />
//                         ) : (
//                             <>
//                                 <Button
//                                     style={{
//                                         width: '100px',
//                                         height: '40px',
//                                         border: '2px solid #613D2B',
//                                         background: '#F5F5F5',
//                                         marginRight: '5px',
//                                         color: '#613D2B',
//                                         borderRadius: '5px',
//                                     }}
//                                     onClick={handleShowLoginModal}
//                                 >
//                                     Login
//                                 </Button>
//                                 <Button
//                                     style={{ width: '100px', height: '40px', background: '#613D2B', borderRadius: '5px' }}
//                                     onClick={handleShowRegisterModal}
//                                 >
//                                     Register
//                                 </Button>
//                             </>
//                         )}
//                     </div>
//                 </Container>
//             </Navbar>
//             <LoginModal showModal={showLoginModal} handleCloseModal={handleCloseLoginModal} />
//             <RegisterComp showModal={showRegisterModal} handleCloseModal={handleCloseRegisterModal} />
//         </>
//     );
// }

// export default NavbarComponent;

import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Icon from "../assets/Icon (3).png";
import { Button, Image } from "react-bootstrap";
import LoginModal from "../login/modal";
import { UserContext } from "../../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import ProfileDropdown from "../dropdown/user-dropdown";
import ProfileDropdownAdmin from "../dropdown/admin-dropdown";
import RegisterComp from "../register/register";
import { useQuery } from "react-query";
import { API } from "../../config/api";
import Jumbotron from '../assets/Jumbotron.png'

function NavbarComponent() {
  const [state, dispatch] = useContext(UserContext);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  let navigate = useNavigate();

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };

  const handleShowRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    localStorage.removeItem("login");
    window.location.href = "/";
  };

  const { data: cartItems } = useQuery("cartItemsCache", async () => {
    const response = await API.get("/carts");
    return response.data.data.length;
  });

  return (
    <>
      <Navbar
        style={{
          background: "#F5F5F5",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.25)",
          width: "100%",
          position: "fixed",
          zIndex: "20",
          top: "0",
          left: "0",
          right: "0",
        }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Icon}
              width="100"
              height="35"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <div style={{ display: "flex", alignItems: "center" }}>
            {state.isLogin && state.role === "customer" && (
              <div style={{ marginRight: "10px" }}>
                <Link to="/payment">
                    <i className="fa-solid fa-cart-shopping"></i>
                </Link>
                <span style={{ fontWeight: "bold" }}>{cartItems}</span>
              </div>
            )}
            {state.isLogin && state.role === "customer" ? (
              <ProfileDropdown handleLogout={handleLogout} />
            ) : state.isLogin && state.role === "admin" ? (
              <ProfileDropdownAdmin handleLogout={handleLogout} />
            ) : (
              <>
                <Button
                  style={{
                    width: "100px",
                    height: "40px",
                    border: "2px solid #613D2B",
                    background: "#F5F5F5",
                    marginRight: "5px",
                    color: "#613D2B",
                    borderRadius: "5px",
                  }}
                  onClick={handleShowLoginModal}
                >
                  Login
                </Button>
                <Button
                  style={{
                    width: "100px",
                    height: "40px",
                    background: "#613D2B",
                    borderRadius: "5px",
                  }}
                  onClick={handleShowRegisterModal}
                >
                  Register
                </Button>
              </>
            )}
          </div>
        </Container>
      </Navbar>
      <LoginModal
        showModal={showLoginModal}
        handleCloseModal={handleCloseLoginModal}
      />
      <RegisterComp
        showModal={showRegisterModal}
        handleCloseModal={handleCloseRegisterModal}
      />
    
    </>
  );
}

export default NavbarComponent;






