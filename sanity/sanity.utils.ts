import { createClient, groq } from "next-sanity";
import { Project } from "../types/Project";
import { Painting } from "../types/Painting";

export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: "ue6wltf4",
        dataset: "production",
        apiVersion: "2024-01-23",
    });


    return client.fetch (
        groq`
        *[_type == "project"]{
            _id, _createdAt, name, "slug": slug.current, "image": image.asset->url, url, content
        }
        `
    )
}

export async function getPaintings(): Promise<Painting[]> {
    const client = createClient({
        projectId: "ue6wltf4",
        dataset: "production",
        apiVersion: "2024-01-23",
        perspective: "published",
        useCdn: false
    });


    const paintings = await client.fetch (
        groq`
        *[_type == "painting"]{
            _id, 
            _createdAt, 
            name, 
            "slug": slug.current, 
            "image": image.asset->url, 
            url, 
            price, 
            description, 
            size
        }
        `
    )
    return paintings;
}