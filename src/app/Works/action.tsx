"use server"
import { getWorkSet, getWorkTotal } from "../../../sanity/sanity.utils";
import { Works } from "../../../types/Works";
import ImageCard from "./imageCard";


export const fetchData =async (start: number, end: number) => {
    const res = await getWorkSet(start, end);
    const data = res;
    try{ 
        if (res.length === 0) throw "no data recieved" 
        return data.map((item:Works, index:number) =><ImageCard item={item} count={index} key={item._id} />);
        }
    catch(err){
        return (false)
    }
};


export const fetchTotal =async () => {
    const res = await getWorkTotal();
    const data = res;
    return data;
    
};
