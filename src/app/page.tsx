'use client'

import { useRef } from "react";
import LandingPage from "./components/landingpage";
import HomePage from "./Home/page";
import debounce from "lodash.debounce";


 const Home = () => {
  
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  const handleScroll = debounce((e: { deltaY: number; }) => {
    const delta = Math.sign(e.deltaY);
    console.log(delta)
    if(delta > 0){
      setTimeout(()=>{
        rightRef.current?.classList.remove('hidden');
        leftRef.current?.classList.remove('w-[100vw]');
        rightRef.current?.classList.add('min-w-[100vw]');
        leftRef.current?.classList.add('w-0')
      },100);
    }
    
  },500);

  const handleTouch = (e:any) => {
    const initialY = e.touches[0].clientY;
    
    const checkSwipeup = (e:any) => {
      const finalY = e.changedTouches[0].clientY;
      if (finalY-initialY < -100){
        setTimeout(()=>{
          leftRef.current?.classList.remove('w-[100vw]');
          rightRef.current?.classList.add('min-w-[100vw]');
          leftRef.current?.classList.add('w-0')
        },100);
      }
      window.removeEventListener("touchend",checkSwipeup);
    }
    window.addEventListener("touchend", checkSwipeup)

  }
  
    return(
    <main className="max-h-[100svh] overflow-y-hidden " >
      <div className="flex w-fit overflow-x-auto whitespace-nowrap"  >
      <div ref={leftRef} id="top" className="z-[2] duration-500 ease-in-out w-[100vw] overflow-hidden" onWheel={handleScroll} onTouchStart={handleTouch}> <LandingPage /></div>
      <div ref={rightRef}> {<HomePage /> }</div>
    </div>
    </main>
    )
}

export default Home;
