import { createClient, groq } from "next-sanity";
import { Works } from "../types/Works";
import { Painting } from "../types/Painting";
import clientConfig from "./schemas/config/client-config";
export const dynamic = 'force-dynamic'
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
        `,{},
        {next: {
            revalidate: 3600 // look for updates to revalidate cache every hour
          }}
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
        `,{},
        {next: {
            revalidate: 3600 // look for updates to revalidate cache every hour
          }}
    )
}

export async function getWorkSet(start: number, end: number) : Promise<Works[]> {
    return createClient(clientConfig).fetch (
        groq`
        *[_type == "works"] | order(_createdAt)[${start}...${end}]{
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
        `,{},
        {next: {
            revalidate: 3600 // look for updates to revalidate cache every hour
          }}
    )
}

export async function getWorkTotal() : Promise<Works[]> {
    return createClient(clientConfig).fetch (
        groq`
        count(*[_type == "works"])
        `,{},
        {next: {
            revalidate: 3600 // look for updates to revalidate cache every hour
          }}
    )
}


export async function getPainting(slug: string): Promise<Painting>{
    return createClient(clientConfig).fetch (
        groq`
        *[_type == "painting" && slug.current == $slug][0]{
            _id, 
            _createdAt, 
            name, 
            "slug": slug.current, 
            "image": image.asset->url, 
            "dimensions": image.asset->metadata.dimensions,
            url, 
            price, 
            description, 
            size,
        }
        `,
        { 
            slug, 
        },
        {next: {
            revalidate: 3600 // look for updates to revalidate cache every hour
          }}
    )
}

interface MiniShopProp{
    itemname: string;
    buyer: string;
    comment: Text;
    email: string;
}
export async function createComment(data: MiniShopProp) : Promise<any>{
    const commentData = {
        mutations : [
            {
            create:
                {
                _type: 'shop',
                itemname: data.itemname,
                buyer: data.buyer,
                comment: data.comment,
                email: data.email
                }
            }
        ]
    }
    try {
        const createUrl = process.env.CREATE_URL
        const apiToken = process.env.API_TOKEN
        await fetch(createUrl!, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiToken}`
            },
            body: JSON.stringify(commentData)

        })
        return { status: 200, message: 'ok'}
    }
    catch (err:any){

        return {err, message: 'server error', status: 400 }
    }
}


