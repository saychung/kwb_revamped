"use client";
import { getPaintings } from "../../../sanity/sanity.utils"
import Image from "next/image";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect, useState } from "react";


const Shop = () => {
    const [paintings, setPaintings] = useState<any>([])
    const [paintingId, setPaintingId] = useState("")

    const openModal = (key : any) => {
      setPaintingId(key)
      document.addEventListener('keydown', handleKeyDown);
    };
  
    const closeModal = () => {
      setPaintingId("");
      document.removeEventListener('keydown', handleKeyDown);
    };
  
    const handleKeyDown = (event : any) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    }



    useEffect (() => {
        getPaintings().then((painting)=>{setPaintings(painting)})
        },[])

    
    let delay=0

    return (
        <div className="relative ">
            <div className="sticky top-0 z-10"><NavBar /></div>
            <div className="w-full h-fit grid justify-center">
            <div className="flex flex-wrap h-fit w-fit gap-3 py-4 px-4 sm:px-20 md:px-[10rem] justify-center  lg:justify-start">
            {paintings.map((painting:any, key: string) => (
                <div key={painting._id} className="h-[200px] w-[160px] sm:h-[300px] sm:w-[300px] border-[1px] backdrop-blur-sm border-slate-300 group rounded-xl" onClick={() => openModal(key)}>
                    <div data-aos='fade-right' data-aos-delay={delay=delay+100} className="h-full flex flex-col">
                    <Image src={painting.image} alt={painting.name} width={250} height={250}  className="w-full h-3/5 rounded-xl p-2"/>
                    <div className=" pl-5 h-2/5 w-full text-left text-black border-t-[1px] rounded-b-xl group-hover:bg-white/40 text-[0.7rem] border-black "> 
                        <div>{painting.name}</div>
                        <div className="flex flex-wrap"><p>Rs:</p> {painting.price}<p>/-</p></div> 
                        <div>{painting.size}</div>
            
                    </div>
                    </div>
                </div>
            ))}

{paintingId !== "" && (
  <div className="fixed top-0 left-0 z-50 w-full h-full backdrop-blur-sm flex justify-center items-center">
    <div className="h-auto w-[80%] overflow-hidden rounded-lg relative"> 
      <div className="w-full sm:w-fit h-auto flex flex-col md:flex-row items-center bg-black/50"> 
        <div className="w-full md:w-3/4 h-full">
        <Image
          src={paintings[paintingId].image}
          alt={`Full View of ${paintings[paintingId].name}`}
          width={1000} height={1000}
          className="w-auto h-fit rounded-l-lg opacity-0 transition-opacity duration-[2s] object-contain"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
        </div>
        <div className="text-white flex flex-col items-center h-full w-full md:w-1/4"> 
          <div className="rounded-b-xl rounded-r-xl p-2 w-full"> 
            <h1>{paintings[paintingId].name}</h1>
            <p>{paintings[paintingId].description}</p>
            <p>{paintings[paintingId].price}</p>
            <p>{paintings[paintingId].size}</p>
          </div>
          <p>Enquire purchase at +91-7583970402 / khanduwangchuk@ymail.com</p>
          <p>&#169;</p>
        </div>
      </div>
    </div>
    <div className="absolute px-1 top-4 right-4 flex flex-row">
              <p className="hidden sm:inline-block rounded-md border-black bg-gray-200 text-black border-[1px] p-2">esc</p>
              <p className="p-2 hidden sm:inline-block">or</p>
              <button onClick={closeModal} className=" text-black hover:text-red-300 rounded-full">X</button>
            </div>
  </div>
)}

            </div>
            </div>
            <footer><Footer /></footer>
        </div>
    )
}

export default Shop;