import { ClientPerspective } from "next-sanity";

const config  = {
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
        dataset: "production",
        apiVersion: "2024-01-23",
        perspective: "published" as ClientPerspective,
        useCdn: false
}

export default config;
