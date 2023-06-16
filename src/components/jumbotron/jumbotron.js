import { Container, Image } from "react-bootstrap";
import Jumbotron from '../assets/Jumbotron.png'

function JumbotronComponent() {
    return (
        
        <>
            <Container style={{marginTop: "100px", textAlign: "center"}} >
                <Image src={Jumbotron} 
                    style={{
                        margin: "auto"
                    }}
                />
            </Container>
        </>    
    )
}

export default JumbotronComponent