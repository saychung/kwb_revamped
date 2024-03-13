'use client'

import { easeInOut, motion } from "framer-motion"


export default function Transition ({children}: {children : React.ReactNode}){
    return (
        <motion.div 
        initial= {{y:20 , opacity: 0}}
        animate= {{y:0, opacity: 100}}
        transition= {{ease: easeInOut, duration: 0.75}}
        >{children}
        </motion.div>
    )
}