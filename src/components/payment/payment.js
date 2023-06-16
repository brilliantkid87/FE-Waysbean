import React, { useState } from 'react'
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import rwanda from '../assets/VirungaEspresso.jpg'
import plus from '../assets/+.png'
import minus from '../assets/-.png'
import { useQuery } from 'react-query';
import { API } from '../../config/api';

function PaymentComponent() {

    const [ cart, setCart ] = useState()

    let {data: carts} = useQuery("cartCache", async () => {
        const response = await API.get("/carts")

        setCart(response.data.data) 
        return response.data.data
    }) 

    console.log(cart);

    // const incrementQuantity = (id) => {
    //     setCart((prevItems) =>
    //         prevItems.map((item) =>
    //             item.id === id ? { ...item, quantity: item.products.stock + 1 } : item
    //         )
    //     );
    // };

    // const decrementQuantity = (id) => {
    //     setCart((prevItems) =>
    //         prevItems.map((item) =>
    //             item.id === id && item.products.stock > 1
    //                 ? { ...item, quantity: item.products.stock - 1 }
    //                 : item
    //         )
    //     );
    // };
    const incrementCart = (id, orderQuantity, product_id) => {
        setCart({
            id: id,
            product_id: product_id,
            order_quantity: orderQuantity + 1,
        })
    }

    const decrementCart = (id, orderQuantity, product_id) => {
        setCart({
            id: id,
            product_id: product_id,
            order_quantity: orderQuantity - 1,
        })
    }

    const removeItem = (id) => {
        setCart((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const subtotal = ((total, item) => total + item.products.price * item.products.stock, 0);
    const total = subtotal;
    const totalQuantity = ((total, item) => total + item.products.stock, 0);

    const renderItems = () => {
        return carts?.map((item, index) => (
            <Row key={item.id} className="align-items-center my-2">
                <Col xs={2}>
                    <Image src={item?.products?.image} alt={item.name} thumbnail fluid />
                </Col>
                <Col xs={4}>
                    <h6>{item?.products?.name}</h6>
                    <Image src={minus} style={{ marginRight: "10px", cursor: "pointer", transition: "ease 0.3s" }} onClick={incrementCart} />
                    <span style={{ display: 'inline-block', minWidth: '30px', textAlign: 'center' }}>
                        {item?.products?.stock}
                    </span>
                    <Image src={plus} style={{ marginLeft: "10px", cursor: "pointer", transition: "ease 0.3s" }} onClick={decrementCart} />
                </Col>
                <Col xs={1}>
                    <p>${item?.products?.price}</p>
                    <Button variant="danger" size="sm" onClick={() => removeItem(item?.products?.id)}>
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