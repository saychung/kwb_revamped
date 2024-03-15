import { getPainting } from "../../../../sanity/sanity.utils";
import Image from "next/image";



export default async function Painting ({ params } : {
    params : { painting : string}
}) {
    const slug = params.painting;
    const painting = await getPainting(slug)
    
    return (
            <div className="w-[80%] h-[90%] bg-black fixed top-[50%] translate-x-[-50%] translate-y-[-50%] left-[50%] z-10 p-[50px] ">
            <Image src={painting.image} width={100} height={100} alt="" style={{width: '100%', height: '100%', objectFit: 'contain'}} sizes="60vw" priority />
            </div>
    )
}