import Link from "next/link";
import { getPaintings } from "../../../sanity/sanity.utils"
import Image from "next/image";


const Gallery = async () => {
    const paintings = await getPaintings();
    let delay=0

    return (
        <div className="h-fit w-screen grid place-content-center pt-10 pb-20"> 
              <div className="my-10 grid grid-cols-1 galaxy-folded:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 h-fit w-fit gap-2 justify-evenly text-black ">
              {paintings.map((painting:any, index: number) => (
                  <div key={index} data-aos='fade-right' data-aos-delay={delay=delay+10} className="cols-span-1 backdrop-blur-xl group hover:cursor-pointer rounded-md bg-black/70 " >
                    <Link  href={`/Shop/${painting.slug}`} className="grid grid-rows-2 h-full w-[170px] relative">
                    <div className="row-span-2 h-[225px] w-fit flex justify-center p-3 ">
                      <Image src={painting.image} alt={painting.name} width={painting.dimensions.width/10} height={painting.dimensions.height/10} className="h-auto w-[145px] p-2 border-b-[1px]"/>
                    </div>
                    <div className= "row-span-1 pl-2 pb-2 h-full text-white">
                      <p className="text-[0.7em] group-hover:pl-4  group-hover:transition-transformation group-hover:ease-in-out group-hover:duration-200">{painting.name}</p>
                      <p className="text-[0.8em] font-bold group-hover:pl-4  group-hover:transition-transforamtion group-hover:ease-in-out group-hover:duration-200">&#8377; {painting.price}/-</p>
                    </div>
                  <p className="absolute h-fit top-0 right-[4px] hidden group-hover:inline text-green-300 text-[20px]">{`*`}</p>
                    </Link>
                    </div>
                
            ))}
              </div>
            </div>
    )
}
export default Gallery;