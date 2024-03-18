import { Works } from "../../../types/Works";
import Image from "next/image";
import { MotionDiv } from "./MotionDiv";


interface ImageCardProps {
    item:Works;
    count: number;
}

const ImageCard=({item ,count}: ImageCardProps)=>{
    const cardAnimation = {
        hidden: {opacity: 0},
        visible: {opacity: 1},
    }
    while (item.location !== undefined){
    return (
        <>
        <MotionDiv 
        variants={cardAnimation}
        initial="hidden"
        animate="visible"
        transition={{
            delay: count*0.3,
            ease: "easeInOut",
            duration: 0.5,
        }}
        viewport={{amount:0}} className="h-full w-[120px] galaxy-folded:w-[165px] sm:w-[230px] p-2 border-black border-[2px] backdrop-blur-md rounded-xl grid place-items-center" 
        >
            <div className="h-full w-[90%] grid items-end"><Image src={item.image} width={item.dimensions.width/5} height={item.dimensions.height/5} alt={`Image of ${item.name}`} className="h-auto w-full rounded-lg object-cover" /></div>
            <div className="h-full w-full grid items-end"><p className="mt-2 h-fit text-[0.7rem] w-full p-2 rounded-md bg-black/50 inline-flex text-white"><Image src='./location.svg' alt='location svg' width={20} height={20}/>{item.location.toString()}</p></div>
        </MotionDiv>
        
        </>
    )
        }

    
}
export default ImageCard;