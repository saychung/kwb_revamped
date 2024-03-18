"use server"

import { getWorkSet, getWorkTotal } from "../../../sanity/sanity.utils";


export const fetchData =async (start: number, end: number) => {
    const res = await getWorkSet(start, end);
    const data = res;
    return data;
};


export const fetchTotal =async (s:string) => {
    const res = await getWorkTotal();
    const data = res;
    console.log(data, 'called from', s)
    return data;
    
};
