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
            <header className="h-fit w-full sticky top-0"><NavBar /></header>
            <div className="grid h-[90%] place-content-center p-2">
                <div className="m-2 w-fit border-2 border-orange-300 rounded-xl text-black"><CloseButton /><ShopCard image={paintings}/></div>
            </div>
            <footer className="fixed bottom-0 w-full h-fit"><Footer /></footer>
            </div>
    )
} 