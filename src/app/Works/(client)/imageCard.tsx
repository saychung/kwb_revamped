'use client'
import { useState } from "react";
import { Works } from "../../../../types/Works";
import Image from "next/image";
import Modal from "../(server)/WorkModal";

interface ImageCardProps {
    item:Works;
    count: number;
}



const ImageCard=({item ,count}: ImageCardProps)=>{
    const [flag, setFlag] = useState(false)
    while (item.location !== undefined){
    return (
        <>
        <div
        data-aos="zoom-in"
        data-aos-easing='ease-in-out'
        data-aos-duration='1000'
        data-aos-delay={`${count*100}`}
        onClick={() => setFlag(true)}
        className="h-full w-[120px] galaxy-folded:w-[165px] sm:w-[230px] p-2 border-black border-[2px] backdrop-blur-md rounded-xl grid place-items-center">
            <div className="h-full w-[90%] grid items-end"><Image src={item.image} width={item.dimensions.width/5} height={item.dimensions.height/5} alt={`Image of ${item.name}`} className="h-auto w-full rounded-lg object-cover" /></div>
            <div className="h-full w-full grid items-end"><p className="mt-2 h-fit text-[0.7rem] w-full p-2 rounded-md bg-black/50 inline-flex text-white"><Image src='./location.svg' alt='location svg' width={20} height={20}/>{item.location.toString()}</p></div>
            </div>
            {flag && <Modal isOpen={flag} setIsOpen={setFlag} item={item}/>}
        
        </>
    )
        }
}
export default ImageCard;