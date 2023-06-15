import { Container, Table } from "react-bootstrap"

function IncomeTransactionComponent() {

    return (

        <>
            <Container style={{ marginTop: "100px" }}>
                <h3 style={{ fontFamily: "avenir", fontStyle: "normal", fontWeight: "bold" }}>Income Transaction</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr style={{ fontFamily: "avenir", fontStyle: "normal", fontWeight: "bold" }}>
                            <th>#</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Post Code</th>
                            <th>Product Order</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ fontFamily: "avenir", fontStyle: "normal" }}>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Madiun</td>
                            <td>62932</td>
                            <td>RWANDA Beans</td>
                            <td>Sukses</td>
                        </tr>
                        <tr style={{ fontFamily: "avenir", fontStyle: "normal" }}>
                            <td>2</td>
                            <td>Mark</td>
                            <td>Madiun</td>
                            <td>62932</td>
                            <td>RWANDA Beans</td>
                            <td>Failed</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>

        </>
    )
}

export default IncomeTransactionComponent