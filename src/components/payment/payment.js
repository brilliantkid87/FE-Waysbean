import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Image, Button, Card, Toast } from 'react-bootstrap';
import minus from '../assets/-.png';
import plus from '../assets/+.png';
import { useMutation, useQuery } from 'react-query';
import { API } from '../../config/api';
import { UserContext } from '../../context/userContext';
import { useNavigate, useParams } from 'react-router-dom';

function PaymentComponent() {
    let navigate = useNavigate();
    const [state] = useContext(UserContext);
    const [cart, setCart] = useState([]);


    let { data: carts } = useQuery("cartCache", async () => {
        const response = await API.get("/cart-user/" + state?.user?.id);
        setCart(response.data.data);
        return response.data.data;
    });

    console.log(carts);

   // State untuk menyimpan data keranjang belanja

    // Fungsi untuk menangani penambahan jumlah pesanan
    const handleIncrement = (itemId) => {
        const updatedCarts = carts.map((item) => {
            if (item.id === itemId) {
                return {
                    ...item,
                    order_quantity: item.order_quantity + 1,
                };
            }
            return item;
        });

        setCart(updatedCarts);
    };

    // Fungsi untuk menangani pengurangan jumlah pesanan
    const handleDecrement = (itemId) => {
        const updatedCarts = carts.map((item) => {
            if (item.id === itemId && item.order_quantity > 1) {
                return {
                    ...item,
                    order_quantity: item.order_quantity - 1,
                };
            }
            return item;
        });

        setCart(updatedCarts);
    };


    let pricetotal = cart?.products?.price * cart?.products?.Quantity
    console.log(carts?.products?.price);
    console.log(carts?.products?.Quantity);

    const removeItem = (productId) => {
        const updatedCarts = carts.filter((item) => item.products.id !== productId);
        setCart(updatedCarts);
      };
      

    const [form, setForm] = useState({
        user_id: '',
        name: '',
        email: '',
        phone: '',
        postcode: '',
        address: '',
        status: '',
        pricetotal: '',
        total_qty: '',
    });

    const handlePay = useMutation(async (e) => {
        try {
            e.preventDefault();

            const config = {
                headers: {
                    'Content-type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.token}`,
                },
            };

            const formData = new FormData();
            formData.set('user_id', form.user_id);
            formData.set('name', form.name);
            formData.set('email', form.email);
            formData.set('phone', form.phone);
            formData.set('postcode', form.postcode);
            formData.set('address', form.address);
            formData.set('status', form.status);
            formData.set('sub_total', subtotal);
            formData.set("total_qty", totalQuantity);
            const response = await API.post('/transaction', formData, config);
            console.log('Yoman : add transaction success : ', response);

            const token = response.data.data.token;
            window.snap.pay(token, {
                onSuccess: function (result) {
                    /* You may add your own implementation here */
                    console.log(result);
                    navigate("/profile");
                },
                onPending: function (result) {
                    /* You may add your own implementation here */
                    console.log(result);
                    navigate("/profile");
                },
                onError: function (result) {
                    /* You may add your own implementation here */
                    console.log(result);
                    navigate("/profile");
                },
                onClose: function () {
                    /* You may add your own implementation here */
                    alert("you closed the popup without finishing the payment");
                },
            });

            // navigate('/profile');
        } catch (error) {
            console.log('Yoman : add product failed : ', error);
        }
    });

    useEffect(() => {
        //change this to the script source you want to load, for example this is snap.js sandbox env
        const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
        //change this according to your client-key
        const myMidtransClientKey = process.env.REACT_APP_MIDTRANS_CLIENT_KEY;

        let scriptTag = document.createElement("script");
        scriptTag.src = midtransScriptUrl;
        // optional if you want to set script attribute
        // for example snap.js have data-client-key attribute
        scriptTag.setAttribute("data-client-key", myMidtransClientKey);

        document.body.appendChild(scriptTag);
        return () => {
            document.body.removeChild(scriptTag);
        };
    }, []);

    var Quantity = cart?.length
    for (let i = 0; i < cart?.length; i++) {
        console.log(cart[i]?.sub_total, cart[i + 1]?.sub_total);
    }

    let subtotal = 0;
    let totalQuantity = 0;

    console.log(carts?.length);

    carts?.forEach((item, index) => {
        const itemSubtotal = item.products.price * item.order_quantity;
        subtotal += itemSubtotal;
        totalQuantity += item.order_quantity;
    });
    const subtotalFormatted = `Subtotal: Rp. ${subtotal.toLocaleString()}`;
    const renderItems = () => {

        return carts?.map((item, index) => {

            return (
                <Row key={item.id} className="align-items-center my-2">
                    <Col xs={2}>
                        <Image src={item?.products?.image} alt={item.name} thumbnail fluid />
                    </Col>
                    <Col xs={4}>
                        <h6>{item?.products?.name}</h6>
                        <Image
                            src={minus}
                            style={{ marginRight: '10px', cursor: 'pointer', transition: 'ease 0.3s' }}
                            onClick={() => handleDecrement(item.id)}
                        />
                        <span style={{ display: 'inline-block', minWidth: '30px', textAlign: 'center' }}>
                            {item.order_quantity}
                        </span>
                        <Image
                            src={plus}
                            style={{ marginLeft: '10px', cursor: 'pointer', transition: 'ease 0.3s' }}
                            onClick={() => handleIncrement(item.id)}
                        />
                    </Col>
                    <Col xs={1}>
                        <p>Rp. {(item?.products?.price).toLocaleString()}</p>
                        <Button variant="danger" size="sm" onClick={() => removeItem(item.products.id)}>
                            <i className="fas fa-trash-alt" />
                        </Button>
                    </Col>
                    {index === 0 && (
                        <Col xs={5} className="mt-3">
                            <Card>
                                <Card.Body>
                                    <Card.Text> {subtotalFormatted.toLocaleString()} </Card.Text>
                                    <Card.Text>Total Quantity: {totalQuantity}</Card.Text>
                                    <Button style={{ background: '#613D2B', width: '100%' }} onClick={(e) => handlePay.mutate(e)}>Pay</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            );
        });
    };

    return (
        <>
            <Container style={{ justifyContent: 'center' }}>
                <h3 style={{ marginTop: '100px', fontFamily: 'avenir', fontStyle: 'normal', color: '#613D2B', fontWeight: 'bold' }}>
                    My Cart
                </h3>
                <p style={{ fontFamily: 'avenir', fontStyle: 'normal', color: '#613D2B' }}>Review Your Order</p>
                {renderItems()}
            </Container>
        </>
    );
}

export default PaymentComponent;


