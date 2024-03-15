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
        <div className="relative">
            <header className="sticky top-0 z-10"><NavBar /></header>
            <div className="h-fit w-screen grid place-content-center">
              <div className="my-10 flex flex-wrap h-full w-[90vw] gap-2 justify-evenly">
              {paintings.map((painting:any, key: string) => (
                <div data-aos='fade-right' data-aos-delay={delay=delay+50}  key={painting._id} className="relative group h-[300px] w-[200px] rounded-xl backdrop-blur-md border-2 border-gray-300/50 hover:cursor-pointer hover:bg-white/40" onClick={() => openModal(key)}>
                    <div className="h-[200px] w-full flex justify-center border-b-2 border-black p-3">
                      <Image src={painting.image} alt={painting.name} width={painting.dimensions.width} height={painting.dimensions.height} className="h-full w-[150px]"/>
                    </div>
                    <div className= "p-3 text-[10px] text-black group-hover:pl-4 group-hover:transition-all group-hover:ease-in-out group-hover:duration-200">
                      <p>{painting.name}</p>
                    </div>
                </div>
                    
            ))}
              </div>
            </div>
            <footer className="fixed w-full h-fit bottom-0"><Footer /></footer>


            {paintingId !== "" && (
                      <div className="fixed top-0 left-0 z-50 h-screen w-full backdrop-blur-md bg-black/30 grid place-content-center">
                      <div onClick={(e) => e.stopPropagation()} className="rounded-xl relative w-[90vw] h-[80svh] sm:h-[95svh] flex flex-col md:flex-row flex-wrap overflow-hidden border-2 border-gray-200 bg-white/80" > 
                        <div className="h-2/3 md:h-full w-full md:w-2/3 grid justify-center relative border-b-2 md:border-b-0 md:border-r-2 border-orange-300">
                          {<Image
                          src={paintings[paintingId].image}
                          alt={`Full View of ${paintings[paintingId].name}`}
                          width={paintings[paintingId].dimensions.width}
                          height={paintings[paintingId].dimensions.height}
                          className={` rounded-[30px] opacity-0  transition-opacity duration-500 py-2 ${paintings[paintingId].dimensions.width <= paintings[paintingId].dimensions.height?'w-auto h-[50svh] lg:h-[85svh]' : ' h-auto w-[80vw] md:w-[50vw]'} `}
                          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                        />}
                        <div className="w-full absolute bottom-0 grid p-1">
                        <p className=" flex w-fit backdrop-blur-md bg-gray-600/30 m-4 rounded-xl p-2 text-white">
                        <Image src='./location.svg' alt='location svg' width={20} height={20}/>
                        Sikkim, India
                        </p>
                        </div>
                        </div>

                        <div className="h-1/3 md:h-full w-full md:w-1/3 p-2 overflow-y-scroll text-black/90">
                          <h1 className="text-[20px] font-bold mt-2 md:mt-10 max-w-fit border-b-2 border-orange-200 text-wrap">{paintings[paintingId].name}</h1>
                          <p className="text-[13px] mt-5"> &#8377; {paintings[paintingId].price} /- (excluding postage)</p>
                          <p className="mt-4 md:mt-10 whitespace-pre-wrap">{paintings[paintingId].description}</p>
                          <p className="font-bold mt-2">Size: {paintings[paintingId].size} (excluding brocade size) </p>
                          <p className="font-bold mt-2">Medium: Acrylic colours, Natural colours on Handmade Cotton
                              Canvas with 24 karat Gold fine work</p>
                              <button className="mt-5 p-3 bg-gray-300 rounded-xl hover:bg-gray-400">Order Now</button>
                        </div>
                        <button onClick={closeModal} className="absolute top-1 left-3 text-black hover:text-gray-400">X</button>
                        
                        </div>
                      <div>

                      </div>
                  </div>
                )}
        </div>
    )
}

export default Shop;