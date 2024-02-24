import { getPaintings } from "../../../sanity/sanity.utils"
import Image from "next/image";





export default async function Test(){
  const paintings =await getPaintings();
  console.log(paintings)
  

  return (
  <div>
    {paintings.map((painting) => (
      <div key={painting._id}>
          {painting.name} 
          <Image src={painting.image} alt={painting.name} width={300} height={300}  className="object-contain w-full h-full"/>
      </div>
    ))}
  </div>
  );
}


