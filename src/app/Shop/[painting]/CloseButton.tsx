'use client'
import { useRouter } from 'next/navigation'
import Link from "next/link"

const CloseButton = () => {
    const router = useRouter()
    const handleClose=()=>{
        router.back();
    }
    return (
        <Link href='/Shop' onClick={handleClose} className='text-black text-[1em] p-2 hover:font-bold'>{`<- go back`}</Link>
    )
}
export default CloseButton;