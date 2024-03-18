'use client'
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { fetchData, fetchTotal } from "./action";
import { Works } from "../../../types/Works";
import ImageCard from "./imageCard";



function LoadMore() {
    const { ref, inView } = useInView();
    const [data , setData] = useState<Works[]>([]);
    const [start, setStart] = useState(8);
    const [end, setEnd] = useState(12);
    const [total, setTotal] = useState(0);
    const [ flag, setflag] = useState(false);
     

    useEffect(()=>{
        if (flag == false){
            setflag(true)
            fetchTotal('loadmore inside useEffect').then((response)=> {setTotal(response as unknown as number); console.log('call from inside fetchTotal in loadmore useEffect', total)});
        }
        else {
            if (inView && end <= total || total == 0){
            fetchData(start,end).then((res)=>{
                setData([...data, ...res])
                setStart(start+4)
                setEnd(end+4)
                console.log(start, end)
                if ((total-end)>0 && (total-end)<4){
                    setStart(end)
                    setEnd(total)
                }
            });
                }
            }
    },[ inView, data])
    
    
    return (
        <>
            <div className="h-fit w-fit grid grid-cols-2 lg:grid-cols-4 justify-center gap-[2px] sm:gap-5">
                {data.map((item:Works) => <div key={item._id} className="p-2"><ImageCard item={item} /></div>)}
            </div>
            <section ref={ref} className="h-fit w-full grid place-content-center">
               <p className=" animate-pulse text-black text-[40px]">Loading...</p>
            </section>
        </>
    )
}

export default LoadMore;