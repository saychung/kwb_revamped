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
                <div className="h-[85vh] lg:h-[70vh] w-[80vw] grid lg:grid-cols-2 place-content-center z-10 rounded-xl] overflow-hidden ">
                    <div className="row-span-1 col-span-0 lg:col-span-1 lg:row-span-0 w-full h-fit grid place-content-center p-6 border-b-2 lg:border-b-0 border-black">
                        <Image src={img.image} width={img.dimensions.width} height={img.dimensions.height} alt="" className="lg:h-[60vh] h-[35vh] w-auto object-contain"/>
                    </div>
                    <div id="showScroll"  className="w-full h-full row-span-1 col-span-0 lg:col-span-1 lg:row-span-0 border-l-0 lg:border-l-2 border-black overflow-y-scroll pb-10">
                        <h1 className="text-[20px] mx-10 border-b-2 border-orange-300 w-fit">{img.name}</h1>
                        <br/>
                        <p className="text-[15px] px-10 font-bold"> &#8377; {img.price}</p>
                        <p className="px-10 whitespace-break-spaces text-[1em] pb-2">{imgDes}</p>
                        <p className="px-10 text-[1em]">Medium: Acrylic colours, Natural colours on Handmade Cotton
                                    Canvas with 24 karat Gold fine work<br/></p>
                        <p className="px-10 text-[1em]">Size: {img.size}</p>
                        <button className="mx-10 p-2 border-orange-300 hover:text-green-300 rounded-sm border-[1px]">Order Now</button>
                    </div> 
                </div>
            )
    }



export default ShopCard;

