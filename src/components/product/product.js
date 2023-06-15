import Card from 'react-bootstrap/Card';
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductDummy from '../dummy/product-dummy'

function ProductComponent() {
    return (
        <>
            <Container style={{ marginTop: "100px", justifyContent: "center" }}>
                <Row xs={1} md={2} lg={3} xl={4} style={{ gap: '20px', justifyContent: "center" }}>
                    {ProductDummy.map((card) => (
                        <Card key={card.id} style={{ width: '18rem', background: "#F6E6DA", padding: "0", margin: "0" }} className='mt-5'>
                            <Card.Img src={card.image} style={{ width: '100%', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title style={{ color: "#613D2B", fontFamily: "avenir", fontStyle: "black", fontWeight: "bold" }}>{card.names}</Card.Title>
                                <Card.Text style={{ color: "#974A4A", fontFamily: "avenir", fontStyle: "book" }}>IDR. {card.price}</Card.Text>
                                <Card.Text style={{ color: "#974A4A", fontFamily: "avenir", fontStyle: "book" }}>Stock : {card.stock}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
            </Container>

        </>
    )
}

export default ProductComponent