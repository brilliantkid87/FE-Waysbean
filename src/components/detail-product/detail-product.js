// import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import { useNavigate, useParams } from "react-router-dom";
// import { useContext, useState } from "react";
// import { UserContext } from "../../context/userContext";
// import { useMutation, useQuery } from "react-query";
// import { API } from "../../config/api";

// function DetailProduct() {
//     let navigate = useNavigate()
//     const { id } = useParams()

//     const [products, setProducts] = useState([])

//     const { data: product } = useQuery('productDetailCache', async () => {
//         const response = await API.get('/product/' + id)
//         setProducts(response.data.data)
//         return response.data.data
//     })
//     console.log("get product succes", products);

//     const handleBuy = useMutation(async (e) => {
//         try {
//             e.preventDefault();

//             const config = {
//                 headers: {
//                     'Content-type': 'application/json',
//                     'Authorization': `Bearer ${localStorage.token}`
//                 },
//             };

//             const data = {
//                 product_id: product.id,

//             }

//             const body = JSON.stringify(data);
//             const response = await API.post('/cart', body, config);
//             console.log('add cart success : ', response);

//         } catch (error) {
//             console.log("add cart failed : ", error);
//         }
//     });

//     return (

//         <>
//             <Container style={{ justifyContent: "center", marginTop: "100px" }}>
//                 <Card className="mb-3 mt-5" style={{ width: '100%' }}>
//                     <Row className="g-0">
//                         <Col md={4}>
//                             <Card.Img src={product?.image} className="img-fluid rounded-start" alt="..." />
//                         </Col>
//                         <Col md={8} style={{ display: "flex", alignItems: "center" }}>
//                             <Card.Body>
//                                 <Card.Title style={{ fontSize: "48px", fontFamily: "avenir" }}>{product?.name}</Card.Title>
//                                 <Card.Text style={{ fontFamily: "avenir" }}>{product?.stock}</Card.Text>
//                                 <Card.Text style={{ fontFamily: "avenir", textAlign: "justify", fontSize: "20px" }}>
//                                     {product?.description}
//                                 </Card.Text>
//                                 <Card.Text className="d-flex justify-content-end">
//                                     {/* <small className="text-body-secondary">Last updated 3 mins ago</small> */}
//                                     Rp.{(product?.price)?.toLocaleString()}
//                                 </Card.Text>
//                                 <div className="d-grid gap-2">
//                                     <Button style={{ background: "#613D2B", borderRadius: "5px", fontFamily: "Product Sans", color: "#ffff" }} size="lg" onClick={(e) => handleBuy.mutate(e)}>
//                                         Add Cart
//                                     </Button>
//                                 </div>
//                             </Card.Body>
//                         </Col>
//                     </Row>
//                 </Card>
//             </Container>

//         </>
//     )
// }

// export default DetailProduct


import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { API } from "../../config/api";

function DetailProduct() {
    let navigate = useNavigate();
    const { id } = useParams();
    const [state, _] = useContext(UserContext)

    console.log(state);

    const [products, setProducts] = useState([]);
    const queryClient = useQueryClient();

    const { data: product } = useQuery("productDetailCache", async () => {
        const response = await API.get("/product/" + id);
        setProducts(response.data.data);
        return response.data.data;
    });
    console.log("get product success", products);

    const handleBuy = useMutation(async (e) => {
        try {
            e.preventDefault();

            const config = {
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${localStorage.token}`,
                },
            };

            const data = {
                user_id: state?.user?.id,
                product_id: product.id,
                order_quantity: +1,
            };

            const body = JSON.stringify(data);
            const response = await API.post("/cart", body, config);
            console.log("add cart success: ", response);

            // Update cartItems value in NavbarComponent
            queryClient.setQueryData("cartItems", (prev) => prev + 1);
            navigate("/payment")
        } catch (error) {
            console.log("add cart failed: ", error);
        }
    });

    return (
        <>
            <Container style={{ justifyContent: "center", marginTop: "100px" }}>
                <Card className="mb-3 mt-5" style={{ width: "100%" }}>
                    <Row className="g-0">
                        <Col md={4}>
                            <Card.Img
                                src={product?.image}
                                className="img-fluid rounded-start"
                                alt="..."
                            />
                        </Col>
                        <Col md={8} style={{ display: "flex", alignItems: "center" }}>
                            <Card.Body>
                                <Card.Title style={{ fontSize: "48px", fontFamily: "avenir" }}>
                                    {product?.name}
                                </Card.Title>
                                <Card.Text style={{ fontFamily: "avenir" }}>
                                    {product?.stock}
                                </Card.Text>
                                <Card.Text
                                    style={{
                                        fontFamily: "avenir",
                                        textAlign: "justify",
                                        fontSize: "20px",
                                    }}
                                >
                                    {product?.description}
                                </Card.Text>
                                <Card.Text className="d-flex justify-content-end">
                                    Rp.{(product?.price)?.toLocaleString()}
                                </Card.Text>
                                <div className="d-grid gap-2">
                                    <Button
                                        style={{
                                            background: "#613D2B",
                                            borderRadius: "5px",
                                            fontFamily: "Product Sans",
                                            color: "#ffff",
                                        }}
                                        size="lg"
                                        onClick={(e) => handleBuy.mutate(e)}
                                        disabled={products.length > 0}
                                    >
                                        {products.length > 0 ? "Produk sudah ada di keranjang" : "Add Cart"}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    );
}

export default DetailProduct;


