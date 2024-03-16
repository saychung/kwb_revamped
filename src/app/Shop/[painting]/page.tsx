import Footer from "@/app/components/footer";
import { getPainting } from "../../../../sanity/sanity.utils";
import ShopCard from "../ShopCard";
import CloseButton from "./CloseButton";
import NavBar from "@/app/components/navbar";



export default async function Painting ({ params } : {
    params : { painting : string}
}) {
    const slug = params.painting;
    const paintings = await getPainting(slug);
    return (
        <div className="relative">

            <div className="grid h-screen place-content-center">
                <CloseButton />
                    <div className="h-fit w-fit border-2 border-black rounded-xl"><ShopCard image={paintings}/></div>
                    
            </div>
            <header className="fixed top-0 h-fit w-full"><NavBar /></header>
            <footer className="fixed w-full h-fit bottom-0"><Footer /></footer>
            </div>
    )
} 