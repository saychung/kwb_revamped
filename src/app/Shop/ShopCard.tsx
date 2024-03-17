import Image from "next/image";

const ShopCard = ({image} : {
    image : {
        description: Text,
        _createdAt: Date,
        slug: string,
        price: number,
        image: string,
        _id: string,
        name: string,
        size: string,
        dimensions: {
            width: number,
            height: number
            }
        }}) => 
        
        {
            const img = image
            const imgDes = String(image.description)
            return(
                <div className="h-[76svh] w-[80vw] p-2 grid sm:grid-cols-2 place-content-center overflow-hidden  border-2 border-orange-300 rounded-xl">
                    <div className="row-span-1 col-span-0 sm:col-span-1 sm:row-span-0 w-full h-fit grid place-content-center p-2 border-b-2 sm:border-b-0 border-black">
                        <Image src={img.image} width={img.dimensions.width} height={img.dimensions.height} alt="" className="sm:h-[60vh] h-[35vh] w-auto object-contain"/>
                    </div>
                    <div className="w-full p-2 h-full row-span-1 col-span-0 sm:col-span-1 sm:row-span-0 border-l-0 sm:border-l-2 border-black overflow-y-scroll ">
                    <div id="showScroll"  className="">
                        <h1 className="text-[1.1em] font-bold md:text-[1.3em] mx-10 border-b-2 border-orange-300 w-fit">{img.name}</h1>
                        <br/>
                        <p className="text-[15px] px-3 font-bold"> &#8377; {img.price}</p>
                        <p className="px-3 whitespace-break-spaces text-[1em] pb-2">{imgDes}</p>
                        <p className="px-3 text-[1em]">Medium: Acrylic colours, Natural colours on Handmade Cotton
                                    Canvas with 24 karat Gold fine work<br/></p>
                        <p className="px-3 text-[1em]">Size: {img.size}</p>
                        <button className="mx-3 p-2 border-orange-300 hover:text-green-300 rounded-sm border-[1px]">Order Now</button>
                    </div> 
                    </div>
                </div>
            )
    }



export default ShopCard;

