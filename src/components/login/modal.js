// import React, { useContext, useState } from 'react';
// import { Modal, Button, Form, Container, Alert } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { UserContext, userContext } from '../../context/userContext';
// import { useMutation } from 'react-query';
// import { API, setAuthToken } from '../../config/api';

// function LoginModal(props) {
//     const { showModal, handleCloseModal } = props;

//     let navigate = useNavigate();

//     const [_, dispatch] = useContext(UserContext)

//     const [message, setMessage] = useState(null)
//     const [form, setForm] = useState({
//         email: '',
//         password: '',
//     })

//     const handleChange = (e) => {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value
//         })
//     }


//     const handleSubmit = useMutation(async (e) => {
//         try {
//             e.preventDefault()
//             handleCloseModal()


//             const response = await API.post('/login', form)
//             console.log("login suucces :", response);

//             dispatch({
//                 type: 'LOGIN_SUCCESS',
//                 // role: response.data.data.role,
//                 payload: response.data.data,
//             })

//             setAuthToken(localStorage.token)

//             if (response.data.data.role === 'admin') {
//                 navigate('/')
//             } else {
//                 navigate('/')
//             }

//             const alert = (
//                 <Alert variant="success" className="py-1">
//                     Login Success
//                 </Alert>
//             )
//             setMessage(alert)
//         } catch (error) {
//             const alert = (
//                 <Alert variant="success" className="py-1">
//                     Login Failed
//                 </Alert>
//             )
//             setMessage(alert)
//             console.log("login failed : ", error);
//         }
//     })


//     return (
//         <>
//             <Container>
//                 <Modal show={showModal} onHide={handleCloseModal}>
//                     <Modal.Header closeButton>
//                         <Modal.Title>Login</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <Form onSubmit={(e) => handleSubmit.mutate(e)}>
//                             <Form.Group controlId="formEmail">
//                                 <Form.Label>Email</Form.Label>
//                                 <Form.Control
//                                     type="email"
//                                     placeholder="Enter email"
//                                     name="email"
//                                     // value={formData.email}
//                                     onChange={handleChange}
//                                 />
//                             </Form.Group>
//                             <Form.Group controlId="formPassword">
//                                 <Form.Label>Password</Form.Label>
//                                 <Form.Control
//                                     type="password"
//                                     placeholder="Password"
//                                     name="password"
//                                     // value={formData.password}
//                                     onChange={handleChange}
//                                 />
//                             </Form.Group>
//                             <Button variant="primary" type="submit">
//                                 Login
//                             </Button>
//                         </Form>
//                     </Modal.Body>
//                 </Modal>
//             </Container>
//         </>
//     )
// };

// export default LoginModal;

// {/* <Modal show={showModal} onHide={handleCloseModal}>
//     <div className="position-relative">
//         <img
//             className="position-absolute top-0 start-0"
//             src={palm}
//             alt="Left Flower"
//         />
//         <img
//             className="position-absolute top-0 end-0"
//             src={hibiscius}
//             alt="Right Flower"
//         />
//         <h3 className="mx-auto my-3 text-center">Login</h3>
//     </div>
//     <Form className="mt-3" onSubmit={(e) => handleSubmit.mutate(e)}>
//         <FormGroup controlId="formBasicEmail" className="p-2">
//             <Form.Label>Email Address</Form.Label>
//             <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 // value={email}
//                 name="email"
//                 onChange={handleChange}
//             />
//         </FormGroup>

//         <Form.Group className="mb-3 p-2" controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 // value={password}
//                 name="password"
//                 onChange={handleChange}
//             />
//         </Form.Group>
//         <div className="d-flex justify-content-center bg-success">
//             <Button
//                 className="m-2 rounded btn-success"
//                 variant="primary"
//                 type="submit"
//             >
//                 Login
//             </Button>
//         </div>
//     </Form>
//     <Form.Group className="mb-3 p-2 m-auto" controlId="formBasicCheckbox">
//         <Form.Label>Don't have an account? Click here</Form.Label>
//     </Form.Group>
// </Modal> */}

import React, { useContext, useState } from 'react';
import { Modal, Button, Form, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { useMutation } from 'react-query';
import { API, setAuthToken } from '../../config/api';

function LoginModal(props) {
    const { showModal, handleCloseModal } = props;

    let navigate = useNavigate();

    const [_, dispatch] = useContext(UserContext);

    const [message, setMessage] = useState(null);
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();
            handleCloseModal();

            const response = await API.post('/login', form);
            console.log('login success:', response);

            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: response.data.data,
            });

            setAuthToken(localStorage.token);

            if (response.data.data.role === 'admin') {
                navigate('/');
            } else {
                navigate('/');
            }

            const alert = (
                <Alert variant="success" className="py-1">
                    Login Success
                </Alert>
            );
            setMessage(alert);
        } catch (error) {
            const alert = (
                <Alert variant="danger" className="py-1">
                    Login Failed
                </Alert>
            );
            setMessage(alert);
            console.log('login failed:', error);
        }
    });

    return (
        <>
            <Container className="d-flex align-items-center justify-content-center">
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title >Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {message && <div className="mb-3">{message}</div>}
                        <Form onSubmit={(e) => handleSubmit.mutate(e)}>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    style={{ background: "rgba(97, 61, 43, 0.25)"}}
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    style={{ background: "rgba(97, 61, 43, 0.25)"}}
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Button style={{ width: "100%", marginTop: "20px", background: "#613D2B"}}
                            variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </Container>
        </>
    );
}

export default LoginModal;
