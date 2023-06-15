import { Button, Col, Container, Form } from "react-bootstrap";

function AddProductComponent() {

    return (

        <>

            <Container style={{ marginTop: "100px" }}>
                <h3 style={{ fontFamily: "avenir", fontStyle: "normal", fontWeight: "bold" }}>Add Product</h3>
                <Col xs={6}>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control style={{ background: "rgba(97, 61, 43, 0.25)"}} type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control style={{ background: "rgba(97, 61, 43, 0.25)"}} type="number" placeholder="stock" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control style={{ background: "rgba(97, 61, 43, 0.25)"}} type="number" placeholder="stock" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control style={{ background: "rgba(97, 61, 43, 0.25)"}} as="textarea" rows={3} placeholder="Description Product" />
                        </Form.Group>
                        <Col xs={5}>
                            <Form.Group controlId="formFileMultiple" className="mb-3">
                                <Form.Control style={{ background: "rgba(97, 61, 43, 0.25)"}} type="file" multiple />
                            </Form.Group>
                        </Col>
                    </Form>
                    <Button style={{ background: "#613D2B", borderRadius: "5px" }}>Add Product</Button>
                </Col>

            </Container>
        </>
    )
}

export default AddProductComponent