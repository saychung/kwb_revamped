'useClient'
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Gallery from "./Gallery";


const Shop = () => {
    return (<div className="relative"> 
              <Gallery />
              <header className="fixed top-0 h-fit w-full"><NavBar /></header>
              <footer className="fixed w-full h-fit bottom-0"><Footer /></footer>
            </div>
    )
}

export default Shop;