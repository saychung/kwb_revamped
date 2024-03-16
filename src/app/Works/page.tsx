'use client'
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { getWorks } from "../../../sanity/sanity.utils"
import Image from "next/image";
import { useEffect, useState } from "react";



const Works = () =>{
    const [data, setData] = useState<any>([])
    const [workId, setWorkId] = useState("")
    let delay=0

    const openModal = (key : any) => {
      setWorkId(key)
      document.addEventListener('keydown', handleKeyDown);
    };
  
    const closeModal = () => {
      setWorkId("");
      document.removeEventListener('keydown', handleKeyDown);
    };
  
    const handleKeyDown = (event : any) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    }
    
    useEffect(()=>{
      getWorks().then((work) => {
        setData(work)
      })
    }, [])

    return(
        <div className="relative">
          <header className="sticky top-0 z-10"><NavBar /></header>
          
          <div className="h-fit w-full grid place-items-center py-2">
            <div className="h-fit w-fit columns-2 sm:columns-3 space-y-3 ">
            {data.map((work:any, key:number) => (
              <div data-aos='fade-right' data-aos-delay={delay=delay+50} key={work._id} className="p-2 w-fit backdrop-blur-sm border-2 border-gray-300 rounded-xl group"  onClick={() => openModal(key)}>
                <Image placeholder='empty' src={work.image} alt={work.name} width={250} height={250}  className="h-auto w-auto rounded-xl"/>
                <p className="absolute w-fit rounded-sm bottom-4 opacity-100 sm:opacity-0 backdrop-blur-sm group-hover:opacity-100 bg-gray-600/30 transition-opacity duration-[1s] text-white flex">
                  <Image src='./location.svg' alt='location svg' width={20} height={20}/>{work.location}</p>
              </div>
            ))}
            </div>
            
          </div>
          
          <footer className="sticky w-full h-fit bottom-0"><Footer /></footer>
          {workId !== "" && (
          <div className="fixed top-0 left-0 z-50 h-screen w-full backdrop-blur-lg bg-black/30 grid place-content-center">
          <div onClick={(e) => e.stopPropagation()} className="relative rounded-lg w-[90vw] sm:w-fit h-fit text-white bg-white flex flex-col flex-wrap gap-2 border-black/50 border-2 overflow-hidden" > 
            <div className="h-fit w-full grid justify-center relative">
              {<Image
              src={data[workId].image}
              alt={`Full View of ${data[workId].name}`}
              width={data[workId].dimensions.width}
              height={data[workId].dimensions.height}
              className={`m-4 mb-0 rounded-[30px] opacity-0  transition-opacity duration-500 ${data[workId].dimensions.width <= data[workId].dimensions.height?'w-auto h-[50vh] sm:h-[80vh]' : ' h-auto w-[80vw] sm:w-[50vw]'} `}
              onLoadingComplete={(image) => image.classList.remove("opacity-0")}
            />}
            <div className="w-full absolute bottom-0 grid p-1">
            <p className=" flex w-fit backdrop-blur-sm bg-gray-600/30 m-4 rounded-xl p-2">
            <Image src='./location.svg' alt='location svg' width={20} height={20}/>{data[workId].location}
            </p>
            </div>
            </div>

            <div className="bg-black m-4 p-2 mt-0 rounded-xl">
              <p className="text-center">{data[workId].name}</p>
              <p className="text-center text-[10px]">{data[workId].description}</p>
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

export default Works;

