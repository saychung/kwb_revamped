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
        <div className="h-full relative ">
            <header className="h-fit w-full sticky top-0"><NavBar /></header>
            <div className="grid h-full place-content-center">
                <div className="h-fit w-fit text-black"><CloseButton /><ShopCard image={paintings}/></div>
            </div>
            <footer className="fixed bottom-0 w-full h-fit"><Footer /></footer>
            </div>
    )
} 