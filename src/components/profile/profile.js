import { Card, Col, Container, Image, Row } from "react-bootstrap";
import myProfile from '../assets/Elon-Musk-2022.webp'
import rwanda from '../assets/VirungaEspresso.jpg'
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useQuery } from "react-query";
import { API } from "../../config/api";

function ProfileComponent() {
    const [state] = useContext(UserContext)
    const [trans, setTrans] = useState()
    console.log(state);
    // const [carts, setCart] = useState

    let { data: transacations } = useQuery("transacationsCache", async () => {
        const response = await API.get("/cart-user/" + state?.user?.id)
        setTrans(response.data.data)
        return response.data.data
    })

    console.log("profile", transacations);
    console.log("trans", trans);

    let subtotal = 0;
    let totalQuantity = 0;

    trans?.forEach((item, index) => {
        const itemSubtotal = item.products.price * item.order_quantity;
        subtotal += itemSubtotal;
        totalQuantity += item.order_quantity;
    });
    const subtotalFormatted = `Subtotal: Rp. ${subtotal.toLocaleString()}`;

    return (

        <>
            {/* <Container style={{ marginTop: "100px", justifyContent: "center" }}>
                <Row>
                    <Col xs={6}>
                        <h4 style={{ fontFamily: "avenir", fontStyle: "normal", fontWeight: "bold" }}>My Profle</h4>
                    </Col>
                    <Col xs={6}>
                        <h4 style={{ fontFamily: "avenir", fontStyle: "normal", fontWeight: "bold" }}>My Transaction</h4>
                    </Col>
                </Row>

                <Row style={{ marginTop: "50px" }}>
                    <Col xs={6}>
                        <Col xs={3}>
                            <Image src={myProfile} style={{ width: "100%" }} />
                        </Col>
                        <Col xs={3}>
                            <h6 style={{ fontFamily: "avenir", fontStyle: "normal", fontWeight: "bold" }}>Full Name</h6>
                            <p style={{ fontFamily: "avenir", fontStyle: "normal" }}>{state?.user.name}</p>
                            <h6 style={{ fontFamily: "avenir", fontStyle: "normal", fontWeight: "bold" }}>Email</h6>
                            <p style={{ fontFamily: "avenir", fontStyle: "normal" }}>{state?.user.email}</p>
                        </Col>
                    </Col>
                    {trans?.map((item, index) => {
                        return (
                            <Col xs={6}>
                                <Card className="mb-3 align-end bg-primary" style={{ background: "#F6E6DA", display: "block" }} >
                                    <div className="row g-0">
                                        <div className="col-md-2" style={{ marginTop: "35px" }}>
                                            <Card.Img src={item?.products?.image} className="img-fluid rounded-start" alt="..." style={{ maxWidth: "100px" }} />
                                        </div>
                                        <div className="col-md-8">

                                            <Card.Body key={index}>
                                                <Card.Title style={{ fontFamily: "avenir", fontStyle: "normal", fontWeight: "bold" }}>{item?.products?.name}</Card.Title>
                                                <Card.Text style={{ fontFamily: "avenir", fontStyle: "normal" }}>Saturday, 5 March 2020</Card.Text>
                                                <Card.Text style={{ fontFamily: "avenir", fontStyle: "normal" }}>Price : Rp. 300.000</Card.Text>
                                                <Card.Text style={{ fontFamily: "avenir", fontStyle: "normal" }}>Qty : 5</Card.Text>
                                                <Card.Text style={{ fontFamily: "avenir", fontStyle: "normal" }}>Subtotal : Rp. 1.500.000</Card.Text>
                                            </Card.Body>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>

            </Container> */}
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {/* <p style={{ marginTop: "100px"}}>My Profile</p> */}
                        <h4 style={{ fontFamily: "avenir", fontStyle: "normal", fontWeight: "bold", marginTop: "100px" }}>My Profle</h4>
                        <div>
                            <Image src={myProfile} style={{ width: "100%" }} />
                        </div>
                        <div>
                            <h6 style={{ fontFamily: "avenir", fontStyle: "normal", fontWeight: "bold" }}>Full Name</h6>
                            <p style={{ fontFamily: "avenir", fontStyle: "normal" }}>{state?.user.name}</p>
                            <h6 style={{ fontFamily: "avenir", fontStyle: "normal", fontWeight: "bold" }}>Email</h6>
                            <p style={{ fontFamily: "avenir", fontStyle: "normal" }}>{state?.user.email}</p>
                        </div>
                    </div>
                    <div className="col-6">
                        {/* <p style={{ marginTop: "100px"}}> My Transaction</p> */}
                        <h4 style={{ fontFamily: "avenir", fontStyle: "normal", fontWeight: "bold", marginTop: "100px" }}>My Transaction</h4>
                        <div>
                            {trans?.map((item, index) => {
                                return (
                                    <Card className="mb-3 align-end bg-primary" style={{ background: "#F6E6DA", display: "block" }} >
                                        <div className="row g-0">
                                            <div className="col-md-2" style={{ marginTop: "35px" }}>
                                                <Card.Img src={item?.products?.image} className="img-fluid rounded-start" alt="..." style={{ maxWidth: "100px" }} />
                                            </div>
                                            <div className="col-6">
                                                <Card.Body key={index}>
                                                    <Card.Title style={{ fontFamily: "avenir", fontStyle: "normal", fontWeight: "bold" }}>{item?.products?.name}</Card.Title>
                                                    <Card.Text style={{ fontFamily: "avenir", fontStyle: "normal" }}>Saturday, 5 March 2020</Card.Text>
                                                    <Card.Text style={{ fontFamily: "avenir", fontStyle: "normal" }}>{item?.products?.price.toLocaleString()}</Card.Text>
                                                    <Card.Text style={{ fontFamily: "avenir", fontStyle: "normal" }}>{totalQuantity}</Card.Text>
                                                    <Card.Text style={{ fontFamily: "avenir", fontStyle: "normal" }}>{subtotalFormatted}</Card.Text>
                                                </Card.Body>
                                            </div>
                                        </div>
                                    </Card>
                                )
                            })}

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileComponent