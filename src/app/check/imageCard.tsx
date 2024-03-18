import { Works } from "../../../types/Works";
import Image from "next/image";


const ImageCard=(items:{item: Works})=>{
    const data = items.item
    const location = (data.location).toString()
    return (
        <div className="h-full w-full p-2 bg-black/80 rounded-xl grid place-items-center">
            <Image src={data.image} width={data.dimensions.width} height={data.dimensions.height} alt={`Image of ${data.name}`} className="h-[200px] w-[200px] rounded-md object-cover" />
            <p className="mt-2 text-[0.7rem] w-full p-2 rounded-md bg-gray-300/50 inline-flex text-white"><Image src='./location.svg' alt='location svg' width={20} height={20}/>{location}</p>
        </div>  
    )

    
}
export default ImageCard;