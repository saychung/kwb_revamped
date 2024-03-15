import Link from "next/link"

export default function Modal({children} : {
    children : React.ReactNode
}){

    return(
    <div>
        <Link href='/Shop'  className="h-100vh w-[100%] backdrop-blur-sm fixed top-0 left-0 z-99" />
        {children}
    </div>
    )
}