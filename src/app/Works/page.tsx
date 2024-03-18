

import Footer from "../components/footer";
import NavBar from "../components/navbar";
import LoadMore from "./LoadMore";
import { fetchData } from "./action";



async function Test(){
  const data = await fetchData(0, 8);
  if(data !== false){
  return(
    <div className="max-h-svh w-svw relative">
     
     <div className="w-full grid justify-center text-[70px] font-bold mt-[2.6rem]"><div className="w-fit  text-black">Ga<i className="text-green-300">l</i><i className="text-orange-300">l</i>ery</div></div>
      <div className="h-full w-full grid place-content-center px-0 sm:px-10">
        <div className="h-full w-full flex flex-col items-center justify-center px-1 p-5 mb-10">
        <div className="h-fit w-fit grid grid-cols-2 lg:grid-cols-4 justify-center gap-[2px] ">
          {data}
        </div>
        <LoadMore />
      </div>
    </div>
    <div className="fixed w-full top-0"><NavBar location={'Works'} /></div> 
    <div className="fixed bottom-0 w-full"><Footer /></div> 
    </div>
  )
  }
}
export default Test;