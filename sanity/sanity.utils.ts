import { createClient, groq } from "next-sanity";
import { Works } from "../types/Works";
import { Painting } from "../types/Painting";
import clientConfig from "./schemas/config/client-config";

export async function getPaintings(): Promise<Painting[]> {

    return createClient(clientConfig).fetch (
        groq`
        *[_type == "painting"]{
            _id, 
            _createdAt, 
            name, 
            "slug": slug.current, 
            "image": image.asset->url, 
            "dimensions": image.asset->metadata.dimensions,
            url, 
            price, 
            description, 
            size
        }
        `
    )
}

export async function getWorks(): Promise<Works[]> {
    
    return createClient(clientConfig).fetch (
        groq`
        *[_type == "works"]{
            _id, 
            _createdAt, 
            name, 
            "slug": slug.current, 
            "image": image.asset->url, 
            "dimensions": image.asset->metadata.dimensions,
            url, 
            location,
            description, 
        }
        `
    )
}