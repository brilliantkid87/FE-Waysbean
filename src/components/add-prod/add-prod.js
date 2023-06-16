import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { API } from "../../config/api";

function AddProductComponent() {
    let navigate = useNavigate()

    const [preview, setPreview] = useState(null);
    const [form, setForm] = useState({
        name: '',
        price: '',
        stock: '',
        description: '',
        image: '',
    })

    console.log(form);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:
                e.target.type === 'file' ? e.target.files : e.target.value,
        });

        if (e.target.type === 'file') {
            let url = URL.createObjectURL(e.target.files[0]);
            setPreview(url);
        }
    };

    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();

            const config = {
                headers: {
                    'Content-type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.token}`
                },
            };

            const formData = new FormData();
            formData.set('name', form.name);
            formData.set('price', form.price);
            formData.set('stock', form.stock);
            formData.set('description', form.description);
            formData.set('image', form.image[0], form.image[0].name);

            const response = await API.post('/product', formData, config);
            console.log('Yoman : add product success : ', response);

            navigate('/listproduct');
        } catch (error) {
            console.log('Yoman : add product failed : ', error);
        }
    });

    return (

        <>
            <Container style={{ marginTop: "100px" }}>
                <Row>
                    <Col xs={6}>
                        <h3 style={{ fontFamily: "avenir", fontStyle: "normal", fontWeight: "bold" }}>Add Product</h3>
                        <Form onSubmit={(e) => handleSubmit.mutate(e)}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control onChange={handleChange} name="name" style={{ background: "rgba(97, 61, 43, 0.25)" }} type="text" placeholder="name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control onChange={handleChange} name="stock" style={{ background: "rgba(97, 61, 43, 0.25)" }} type="number" placeholder="stock" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control onChange={handleChange} name="price" style={{ background: "rgba(97, 61, 43, 0.25)" }} type="number" placeholder="price" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control onChange={handleChange} name="description" style={{ background: "rgba(97, 61, 43, 0.25)" }} as="textarea" rows={3} placeholder="Description Product" />
                            </Form.Group>
                            <Form.Group controlId="formFileMultiple" className="mb-3">
                                <Form.Control onChange={handleChange} name="image" style={{ background: "rgba(97, 61, 43, 0.25)" }} type="file" multiple />
                            </Form.Group>
                            <Button type="submit" style={{ background: "#613D2B", borderRadius: "5px" }}>Add Product</Button>
                        </Form>
                    </Col>
                    <Col xs={6}>
                        {preview && (
                            <img
                                src={preview}
                                style={{
                                    width: '100%',
                                    height: '500px',
                                    objectFit: 'cover',
                                }}
                                alt={preview}
                            />
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AddProductComponent