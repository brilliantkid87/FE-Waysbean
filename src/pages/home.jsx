import JumbotronComponent from "../components/jumbotron/jumbotron";
import NavbarComponent from "../components/navbar/navbar";
import ProductComponent from "../components/product/product";

function Home() {
    return (
        <>
            <div>
                <NavbarComponent />
                <JumbotronComponent />
                <ProductComponent />
            </div>
        
        </>    
    )
}

export default Home