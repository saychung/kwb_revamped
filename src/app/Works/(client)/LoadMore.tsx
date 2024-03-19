'use client'
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { fetchData, fetchTotal } from "../(server)/action";
import  { Skeleton } from "../(server)/loadingSkeleton";



export type CardProp = JSX.Element;

function LoadMore() {
    const { ref, inView } = useInView();
    const [data , setData] = useState<CardProp[]>([]);
    const [start, setStart] = useState(8);
    const [end, setEnd] = useState(12);
    const [total, setTotal] = useState(0);

    function removeRef(){
        document.getElementById('ref')?.classList.add("hidden");
    }
    useEffect(()=>{
        if (total === 0){
            fetchTotal().then((response)=> {setTotal(response as unknown as number)});
        }
        else {
            if (inView){  
            fetchData(start,end).then((res : any)=>{
                if( res === false){
                    removeRef()
                }
                else{
                setData([...data, ...res])
                setStart(start+4)
                setEnd(end+4)
                }
            });
                }
            }
    },[ inView, data, total])
    return (
        <>
            <div className="h-fit w-fit grid grid-cols-2 lg:grid-cols-4 justify-center gap-[2px] p-[2px]">
                {data}
                <section id="ref" ref={ref} className="h-fit w-fit grid place-content-center animate-pulse" >
                    <Skeleton />
                </section>
            </div>
            
            
        </>
    )
}
export default LoadMore;