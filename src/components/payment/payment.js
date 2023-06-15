import React, { useState } from 'react'
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import rwanda from '../assets/VirungaEspresso.jpg'
import plus from '../assets/+.png'
import minus from '../assets/-.png'

function PaymentComponent() {
    const [items, setItems] = useState([
        { id: 1, name: 'Barang 1', price: 10, quantity: 1, image: rwanda },
        { id: 2, name: 'Barang 2', price: 20, quantity: 2, image: rwanda },
        { id: 3, name: 'Barang 3', price: 15, quantity: 1, image: rwanda },
        { id: 4, name: 'Barang 3', price: 15, quantity: 1, image: rwanda },
        { id: 5, name: 'Barang 3', price: 15, quantity: 1, image: rwanda },
        { id: 6, name: 'Barang 3', price: 15, quantity: 1, image: rwanda },
        { id: 7, name: 'Barang 3', price: 15, quantity: 1, image: rwanda },
    ]);

    const incrementQuantity = (id) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decrementQuantity = (id) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const total = subtotal;
    const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

    const renderItems = () => {
        return items.map((item, index) => (
            <Row key={item.id} className="align-items-center my-2">
                <Col xs={2}>
                    <Image src={item.image} alt={item.name} thumbnail fluid />
                </Col>
                <Col xs={4}>
                    <h6>{item.name}</h6>
                    <Image src={minus} style={{ marginRight: "10px", cursor: "pointer", transition: "ease 0.3s" }} onClick={() => decrementQuantity(item.id)} />
                    <span style={{ display: 'inline-block', minWidth: '30px', textAlign: 'center' }}>
                        {item.quantity}
                    </span>
                    <Image src={plus} style={{ marginLeft: "10px", cursor: "pointer", transition: "ease 0.3s" }} onClick={() => incrementQuantity(item.id)} />
                </Col>
                <Col xs={1}>
                    <p>${item.price}</p>
                    <Button variant="danger" size="sm" onClick={() => removeItem(item.id)}>
                        <i className="fas fa-trash-alt" />
                    </Button>
                </Col>
                {index === 0 && (
                    <Col xs={5} className="mt-3">
                        <Card>
                            <Card.Body>
                                <Card.Text>Subtotal: ${subtotal}</Card.Text>
                                <Card.Text>Quantity: {totalQuantity}</Card.Text>
                                <Card.Text>Total: ${total}</Card.Text>
                                <Button style={{ background: "#613D2B", width: "100%" }} >
                                    Pay
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        ));
    };

    return (
        <>
            <Container style={{ justifyContent: "center" }}>
                <h3 style={{ marginTop: "100px", fontFamily: "avenir", fontStyle: "normal", color: "#613D2B", fontWeight: "bold"}}>My Cart</h3>
                <p style={{ fontFamily: "avenir", fontStyle: "normal", color: "#613D2B"}}>Review Your Order</p>
                {renderItems()}
            </Container>
        </>
    );
}

export default PaymentComponent