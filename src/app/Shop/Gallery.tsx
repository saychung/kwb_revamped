import Link from "next/link";
import { getPaintings } from "../../../sanity/sanity.utils"
import Image from "next/image";


const Gallery = async () => {
    const paintings = await getPaintings();
    let delay=0

    return (
        <div className="h-fit w-screen grid place-content-center pt-10 pb-20">
              <div className="my-10 flex flex-wrap h-fit w-[90vw] gap-2 justify-evenly">
              {paintings.map((painting:any, index: number) => (
                <Link key={index}  href={`/Shop/${painting.slug}`}>
                  <div data-aos='fade-right' data-aos-delay={delay=delay+50} className="relative group h-full w-[200px] hover:cursor-pointer hover:bg-white/40 border-2 border-t-gray-300/50 border-x-gray-300/50 border-b-black/50 grid grid-rows-2" >
                    <div className="row-span-2 h-[225px] w-full flex justify-center p-3 rounded-t-xl backdrop-blur-md border-b-black border-2">
                      <Image src={painting.image} alt={painting.name} width={painting.dimensions.width} height={painting.dimensions.height} className="h-auto w-[150px]"/>
                    </div>
                    <div className= "row-span-1 p-3 h-full text-[13px] text-black group-hover:pl-4  group-hover:transition-all group-hover:ease-in-out group-hover:duration-200 relative">
                      <p>{painting.name}</p>
                      <p className="font-bold">&#8377; {painting.price}/-</p>
                    </div>
                    <p className="absolute bottom-3 right-3 hidden group-hover:inline text-green-700">{`>>`}</p>
                </div>
                </Link>
            ))}
              </div>
            </div>
    )
}
export default Gallery;