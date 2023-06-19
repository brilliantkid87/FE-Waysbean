import { Container, Table } from "react-bootstrap"
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom"
import { API } from "../../config/api";

function ListProductComponent() {
    let navigate = useNavigate()
    const { id } = useParams()
    const { data: product } = useQuery('productsCache', async () => {
        const response = await API.get('/products');
        return response.data.data;
    });

    return (

        <>
            <Container>
                <Container style={{ marginTop: "100px" }}>
                    <h3 style={{ fontFamily: "avenir", fontStyle: "normal", fontWeight: "bold" }}>List Product</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr style={{ fontFamily: "avenir", fontStyle: "normal", fontWeight: "bold" }}>
                                <th>No</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Stock</th>
                                <th>Price</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        {product?.map((card, index) => (

                            <tbody key={index}>
                                <tr style={{ fontFamily: "avenir", fontStyle: "normal" }}>
                                    <td>{index + 1}</td>
                                    <td>{card.image}</td>
                                    <td>{card.name}</td>
                                    <td>{card.stock}</td>
                                    <td>{card.price}</td>
                                    <td>{card.description}</td>
                                </tr>
                                {/* <tr style={{ fontFamily: "avenir", fontStyle: "normal" }}>
                                    <td>2</td>
                                    <td></td>
                                    <td>ETHIOPIA Beans</td>
                                    <td>120</td>
                                    <td>150000</td>
                                    <td></td>
                                </tr> */}
                            </tbody>
                        ))}
                    </Table>
                </Container>

            </Container>
        </>
    )
}

export default ListProductComponent