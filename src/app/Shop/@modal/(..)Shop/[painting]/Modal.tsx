'use client'
 
import { useRouter } from 'next/navigation'

export default function Modal({children} : {
    children : React.ReactNode
})
{
    const router = useRouter()

    const handleClose=()=>{
        router.back();
    }
  
    
    return(
        <div className='fixed top-0 left-0 z-100 h-[100svh] w-full backdrop-blur-xl'>
            <div className='relative h-full w-full grid place-content-center'>
                <div className='h-fit w-fit border-2 border-black rounded-xl'>{children}
                <div className='fixed top-4 right-10'>
                    <button onClick={handleClose} className='text-black text-[15px] rounded-md border-2 px-2 border-black hover:bg-white/50'>Close</button>
                </div>
                </div>
                
            </div>

        </div>
    )
}