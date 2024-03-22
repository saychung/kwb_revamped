import { NextResponse } from "next/server";
export async function GET (req : Request) {
    return NextResponse.json({
        message : "Hello World"
    })
} 

export async function POST (req: Request) {
    const commentData =  await req.json()
    try {
        const createUrl = process.env.CREATE_URL??''
        const apiToken = process.env.APITOKEN??''
        const newComment = await fetch(createUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiToken}`
            },
            body: JSON.stringify(commentData)

        })
        return NextResponse.json({message:newComment,status: 200})
    }
    catch (err){
        console.error('Error creating comment:', err)
        return NextResponse.json({message:err,error: 400})
    }
}