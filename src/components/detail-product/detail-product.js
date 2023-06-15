import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Rwanda from '../assets/VirungaEspresso.jpg'

function DetailProduct() {

    return (

        <>
            <Container style={{ justifyContent: "center" }}>
                <Card className="mb-3 mt-5" style={{ width: '100%' }}>
                    <Row className="g-0">
                        <Col md={4}>
                            <Card.Img src={Rwanda} className="img-fluid rounded-start" alt="..." />
                        </Col>
                        <Col md={8} style={{ display: "flex", alignItems: "center" }}>
                            <Card.Body>
                                <Card.Title style={{ fontSize: "48px", fontFamily: "avenir" }}>GUETEMALA Beans</Card.Title>
                                <Card.Text style={{ fontFamily: "avenir" }}>Stock : 10</Card.Text>
                                <Card.Text style={{ fontFamily: "avenir", textAlign: "justify", fontSize: "20px" }}>
                                    Hampir semua referensi sepakat mengatakan bahwa kopi pertama kali ditemukan di Ethiopia, meskipun ada juga beberapa protes yang menyatakan bahwa Coffea arabica sebenarnya muncul pertama kali di bagian selatan Sudan. Karena para gembala Ethiopia adalah manusia pertama yang mengonsumsi kopi—walau saat itu mereka baru mengonsumsi buah/cherry-nya saja, maka gagasan tentang “Ethiopia sebagai tempat asal kopi” pun semakin kuat.
                                </Card.Text>
                                <Card.Text className="d-flex justify-content-end">
                                    {/* <small className="text-body-secondary">Last updated 3 mins ago</small> */}
                                    Rp.300,000
                                </Card.Text>
                                <div className="d-grid gap-2">
                                    <Button style={{ background: "#613D2B", borderRadius: "5px", fontFamily: "Product Sans", color: "#ffff" }} size="lg">
                                        Add Cart
                                    </Button>
                                </div>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>

        </>
    )
}

export default DetailProduct
