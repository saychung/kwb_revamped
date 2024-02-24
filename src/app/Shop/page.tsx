"use client";
import { getPaintings } from "../../../sanity/sanity.utils"
import Image from "next/image";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect, useState } from "react";


const Shop = () => {
    const [paintings, setPaintings] = useState<any>([])
    const [paintingId, setPaintingId] = useState("")


    const openModal = (key: any) => {
    setPaintingId(key);
    console.log(key)
    console.log(paintings[key].image)

    }
    const closeModal = (key: any) => {
        setPaintingId("");
    }




    useEffect (() => {
        getPaintings().then((painting)=>{setPaintings(painting)})
        },[])

    


    return (
        <div className="">
            <NavBar />
            <div className="w-screen h-svh">
            <div className="flex flex-wrap h-fit w-full gap-2 sm:gap-[8rem] py-4 px-4 sm:px-20 md:px-[10rem] justify-center">
            {paintings.map((painting:any, key: string) => (
                <div key={painting._id} className="h-[200px] w-[160px] sm:h-[300px] sm:w-[300px] border-[1px] backdrop-blur-sm border-slate-300 group" onClick={() => openModal(key)}>
                    <div className="h-full flex flex-col">
                    <Image src={painting.image} alt={painting.name} width={250} height={250}  className="w-full h-3/5 rounded-xl p-2"/>
                    <div className=" pl-5 h-2/5 w-full text-left text-black border-t-[1px] group-hover:bg-white text-[0.7rem] border-black "> 
             
                        <div>{painting.name}</div>
                        <div className="flex flex-wrap"><p>Rs:</p> {painting.price}<p>/-</p></div> 
                        <div>{painting.size}</div>
            
                    </div>
                    </div>
                </div>
            ))}

{paintingId !== "" && (
  <div className="fixed top-0 left-0 z-50 w-full h-full backdrop-blur-sm flex justify-center items-center">
    <div className="h-fit w-fit overflow-hidden rounded-lg relative"> 
      <div className="w-full h-full grid grid-flow-row sm:grid-flow-col gap-2 items-center justify-center"> 
        <Image
          src={paintings[paintingId].image}
          alt={`Full View of ${paintings[paintingId].name}`}
          width={1000} height={1000}
          className="w-full h-full rounded-lg opacity-0 transition-opacity duration-[2s]"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
        <div className="text-white flex flex-col items-center h-fit w-fit"> 
          <div className="rounded-b-xl rounded-r-xl bg-black/50 p-2 w-full"> 
            <h1>{paintings[paintingId].name}</h1>
            <p>{paintings[paintingId].description}</p>
            <p>{paintings[paintingId].price}</p>
            <p>{paintings[paintingId].size}</p>
          </div>
          <button className="p-2">Place Order</button>
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