import Card from 'react-bootstrap/Card';
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductDummy from '../dummy/product-dummy'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { API } from '../../config/api';
import { useQuery } from 'react-query';

function ProductComponent() {
    let navigate = useNavigate()
    // const { id } = useParams()
    const { data: product } = useQuery('productsCache', async () => {
        const response = await API.get('/products');
        return response.data.data;
    });
    return (
        <>
            <Container style={{ marginTop: "100px", justifyContent: "center" }}>
                <Row xs={1} md={2} lg={3} xl={4} style={{ gap: '20px', justifyContent: "center" }}>
                    {product?.map((card, index) => (
                        <Card key={card.id} style={{ width: '18rem', background: "#F6E6DA", padding: "0", margin: "0" }} className='mt-5'>
                            <Card.Img src={card.image} style={{ width: '100%', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title style={{ color: "#613D2B", fontFamily: "avenir", fontStyle: "black", fontWeight: "bold" }}>
                                    <Link to={`/detailproduct/${card.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                        {(card?.name)}
                                        {/* {truncateText(card.title, 100)} */}
                                    </Link>
                                </Card.Title>
                                <Card.Text style={{ color: "#974A4A", fontFamily: "avenir", fontStyle: "book" }}>Rp.{(card.price).toLocaleString()}</Card.Text>
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