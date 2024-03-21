"use server"
import z, { ZodError } from "zod";
import { createComment } from "../../../../sanity/sanity.utils"
import { revalidatePath } from "next/cache";


const scheme = z.object({
    buyer: z.string().min(1),
    email: z.string().email().min(1),
    comment: z.string().min(10),
    itemname: z.string(),
  })
export default async function sendData(prevState: any, formData: FormData){
  
    try {
        const parseData = scheme.parse({
          buyer: formData.get("buyer"),
          itemname: formData.get("painting"),
          email: formData.get("email"),
          comment: formData.get("comment")
        })
        const data = {
          buyer: parseData.buyer,
          itemname: parseData.itemname,
          email: parseData.email,
          comment: parseData.comment as unknown as Text
        }
        const res =  await createComment(data)
      
        return res
        

        
   }
   catch (e) {
    const error = e as ZodError
  
    if (!error.isEmpty) return {...error.format(), message : "Validation error"}
  }
  const pathname = formData.get("pathname") as string
  if(pathname !== null){
    revalidatePath(pathname)
  }
  
}