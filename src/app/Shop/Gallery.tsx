import Link from "next/link";
import { getPaintings } from "../../../sanity/sanity.utils"
import Image from "next/image";


const Gallery = async () => {
    const paintings = await getPaintings();
    let delay=0

    return (
        <div className="h-fit w-screen grid place-content-center pt-10 pb-20"> 
              <div className="my-10 flex flex-wrap h-fit w-[90vw] gap-2 justify-evenly text-black ">
              {paintings.map((painting:any, index: number) => (
                  <div key={index} data-aos='fade-right' data-aos-delay={delay=delay+50} className="relative backdrop-blur-sm  group hover:cursor-pointer rounded-md border-[1px]  hover:bg-white/40 border-orange-300" >
                    <Link  href={`/Shop/${painting.slug}`} className="grid grid-rows-2 h-full w-[200px]">
                    <div className="row-span-2 h-[225px] w-full flex justify-center p-3 border-b-2 border-black">
                      <Image src={painting.image} alt={painting.name} width={painting.dimensions.width} height={painting.dimensions.height} className="h-auto w-[145px]"/>
                    </div>
                    <div className= "row-span-1 pl-2 pb-2 h-full text-[13px]  relative">
                      <p className="group-hover:pl-4  group-hover:transition-transformation group-hover:ease-in-out group-hover:duration-200">{painting.name}</p>
                      <p className="font-bold group-hover:pl-4  group-hover:transition-transforamtion group-hover:ease-in-out group-hover:duration-200">&#8377; {painting.price}/-</p>
                      <p className="absolute bottom-2 right-3 hidden group-hover:inline text-green-700">{`>>`}</p>
                    </div>
                    </Link>
                    </div>
                
            ))}
              </div>
            </div>
    )
}
export default Gallery;