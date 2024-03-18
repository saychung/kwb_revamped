import { Works } from "../../../types/Works";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import LoadMore from "./LoadMore";
import { fetchData } from "./action";
import ImageCard from "./imageCard";


async function Test(){
  
  const data = await fetchData(0, 8);

  
  return(
    <div className="max-h-svh w-svw relative">
     <div className="fixed w-full top-0"><NavBar /></div> 
     <div className="w-full grid justify-center text-[70px] font-bold mt-[2.6rem]"><div className="w-fit  text-black">Gallery</div></div>
      <div className="h-full w-full grid place-content-center sm:px-10">
        <div className="h-full w-full flex flex-col items-center justify-center px-5 py-5 sm:p-10">
        <div className="h-fit w-fit grid grid-cols-2 lg:grid-cols-4 justify-center gap-[2px] sm:gap-5">
          {data.map((item:Works) => <div key={item._id} className="p-2"><ImageCard item={item} /></div>)}
        </div>
        <LoadMore />
      </div>
    </div>
    <div className="fixed bottom-0 w-full"><Footer /></div> 
    </div>
  )
}
export default Test;