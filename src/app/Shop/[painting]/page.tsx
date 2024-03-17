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
        <div className="h-svh relative">
            <div className="grid h-fit lg:h-full place-content-center text-black py-[60px]">
                <CloseButton />
                <ShopCard image={paintings}/>
            </div>
            <header className="h-fit w-full fixed top-0"><NavBar /></header>
            <footer className="fixed bottom-0 w-full h-fit"><Footer /></footer>
            
            </div>
    )
} 