'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'



const CloseButton = () => {
    const router = useRouter()
    const handleClose=()=>{
        router.back();
    }
    return (
        <button onClick={handleClose} className='mt-2 ml-2 sm:w-[40px] w-[30px] h-[30px] sm:h-[40px] p-1 rounded-full ring-1 backdrop-blur-xl ring-orange-300' >
            <Image src="../back.svg" alt="" width={40} height={40}  className='h-full w-full rounded-full hover:bg-green-300/30'/>
        </button>
    )
    }

export default CloseButton;