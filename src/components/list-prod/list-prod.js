import { Container, Table } from "react-bootstrap"

function ListProductComponent() {

    return (

        <>
            <Container>
                <Container style={{ marginTop: "100px" }}>
                    <h3 style={{ fontFamily: "avenir", fontStyle: "normal", fontWeight: "bold" }}>List Product</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr style={{ fontFamily: "avenir", fontStyle: "normal", fontWeight: "bold" }}>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Stock</th>
                                <th>Price</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ fontFamily: "avenir", fontStyle: "normal" }}>
                                <td>1</td>
                                <td></td>
                                <td>RWANDA Beans</td>
                                <td>120</td>
                                <td>150000</td>
                                <td></td>
                            </tr>
                            <tr style={{ fontFamily: "avenir", fontStyle: "normal" }}>
                                <td>2</td>
                                <td></td>
                                <td>ETHIOPIA Beans</td>
                                <td>120</td>
                                <td>150000</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>

            </Container>
        </>
    )
}

export default ListProductComponent