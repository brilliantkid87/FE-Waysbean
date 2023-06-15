import { Card, Col, Container, Image, Row } from "react-bootstrap";
import myProfile from '../assets/Elon-Musk-2022.webp'
import rwanda from '../assets/VirungaEspresso.jpg'

function ProfileComponent() {

    return (

        <>

            <Container style={{ marginTop: "100px", justifyContent: "center" }}>
                <Row>
                    <Col xs={6}>
                        <h4 style={{ fontFamily: "avenir", fontStyle: "normal", fontWeight: "bold" }}>My Profle</h4>
                    </Col>
                    <Col xs={6}>
                        <h4 style={{ fontFamily: "avenir", fontStyle: "normal", fontWeight: "bold" }}>My Transaction</h4>
                    </Col>
                </Row>

                <Row style={{ marginTop: "50px" }}>
                    <Col xs={3}>
                        <Image src={myProfile} style={{ width: "100%" }} />
                    </Col>
                    <Col xs={3}>
                        <h6 style={{ fontFamily: "avenir", fontStyle:"normal", fontWeight: "bold" }}>Full Name</h6>
                        <p style={{ fontFamily: "avenir", fontStyle:"normal" }}>Radif Ganteng</p>
                        <h6 style={{ fontFamily: "avenir", fontStyle:"normal", fontWeight: "bold" }}>Email</h6>
                        <p style={{ fontFamily: "avenir", fontStyle:"normal" }}>RadifGanteng@mail.com</p>
                    </Col>

                    {/* <Col xs={6} style={{ background: "#F6E6DA" }}> */}
                    <Card className="col-6 mb-3 align-middle" style={{ background: "#F6E6DA" }} >
                        <div className="row g-0">
                            <div className="col-md-2" style={{ marginTop: "35px" }}>
                                <Card.Img src={rwanda} className="img-fluid rounded-start" alt="..." style={{ maxWidth: "100px" }} />
                            </div>
                            <div className="col-md-8">
                                <Card.Body>
                                    <Card.Title style={{ fontFamily: "avenir", fontStyle:"normal", fontWeight: "bold" }}>GUETEMALA Beans</Card.Title>
                                    <Card.Text style={{ fontFamily: "avenir", fontStyle:"normal" }}>Saturday, 5 March 2020</Card.Text>
                                    <Card.Text style={{ fontFamily: "avenir", fontStyle:"normal" }}>Price : Rp. 300.000</Card.Text>
                                    <Card.Text style={{ fontFamily: "avenir", fontStyle:"normal" }}>Qty : 5</Card.Text>
                                    <Card.Text style={{ fontFamily: "avenir", fontStyle:"normal" }}>Subtotal : Rp. 1.500.000</Card.Text>
                                </Card.Body>
                            </div>
                        </div>
                    </Card>
                    {/* </Col> */}
                </Row>
            </Container>
        </>
    )
}

export default ProfileComponent