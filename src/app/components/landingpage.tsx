'use client'
import Image from "next/image";
import { useTypewriter,Cursor } from "react-simple-typewriter";





const Typer = () => {
    const [typeEffect] = useTypewriter({
        words: ['Thangka.Master.Artist','Padmashree.2022'],
        loop: true,
        typeSpeed: 60,
        deleteSpeed: 60,
        delaySpeed: 2000,
    })
    return (
        <div>
            <p className=" text-[0.8rem] text-left sm:text-[1.2rem] tracking-widest underline underline-black underline-offset-2 underline-2">{typeEffect}<Cursor /></p>
        </div>
    );
}

const TextLogo = () => (
    <div className=" w-1/2 pl-0  tabl:pl-10 tabl:top-[50%] tabl:left-[20%] text-gray-600 ">
        <div className={`w-full flex justify-center flex-col items-center `}>
                <div className="w-fit">
                <Image src="/name.svg" alt="Name" width={400} height={400}/>
                <div className=" whitespace-nowrap overflow-auto w-full pt-3 ">
                    <Typer />
                </div>
                </div>
        
        </div>  
        
    </div>
)

const LandingPage = () => (
   
    <div className="w-[100%] h-[100svh] overflow-hidden relative">
    
    <div className="w-[100%] h-[100svh] overflow-hidden flex flex-col sm:flex-row gap-10 items-center justify-center">
    <TextLogo />
    <span id="image" className="w-full h-1/2 relative sm:w-1/2 sm:h-dvh">
        <Image src="/images/blurlandingimage1.png" placeholder="blur" blurDataURL="loading ..." alt="Art Image" width={400} height={400} className="w-full h-full object-contain" />
    </span>
    
    </div>
    <p className="absolute w-full text-black/50 bottom-5 text-center text-md z-2 hidden sm:inline">Scroll to View</p>
    <p className="absolute w-full text-black/50 bottom-5 text-center text-md z-2 inline sm:hidden animate-bounce">Swipe up to view</p>
    </div>
)


export default LandingPage;