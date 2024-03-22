import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from './sanity/schemas'


const config = defineConfig({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
    dataset: "production",
    title: "Khandu Wangchuk Bhutia Portfolio",
    apiVersion: "2024-01-01",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: { types: schemas },

})

export default config;
