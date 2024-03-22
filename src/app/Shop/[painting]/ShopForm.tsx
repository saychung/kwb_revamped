"use client"

import { usePathname } from "next/navigation"
import sendData from "./action"
import Button from "./Button"
import { useFormState } from "react-dom"
import { ZodError } from "zod"

const initialState: ZodError['format'] | null = null
interface AddFormProp{
    painting: string
}
export default function AddForm({painting}: AddFormProp) {
  
  const [state, formAction] = useFormState(sendData, initialState);
  const pathname = usePathname();
  function clearMessage(){
    document.getElementById("server-success")?.classList.remove("hidden")
    document.getElementById("server-fail")?.classList.remove("hidden")
    document.getElementById("validation-fail")?.classList.remove("hidden")
  }


  if(state !== null)
  {
    if(state.message == 'ok'){
      document.getElementById("server-success")?.classList.remove("hidden")
      if(!document.getElementById("server-fail")?.classList.contains("hidden")){
        document.getElementById("server-fail")?.classList.add("hidden")
      }
      if(!document.getElementById("validation-fail")?.classList.contains("hidden")){
        document.getElementById("validation-fail")?.classList.add("hidden")
      }
    }
    else if(state.message == 'server error'){
      document.getElementById("server-fail")?.classList.remove("hidden")
      if(!document.getElementById("server-success")?.classList.contains("hidden")){
        document.getElementById("server-success")?.classList.add("hidden")
      }
      if(!document.getElementById("validation-fail")?.classList.contains("hidden")){
        document.getElementById("validation-fail")?.classList.add("hidden")
      }
    }
    else if(state.message == 'Validation error'){
      document.getElementById("validation-fail")?.classList.remove("hidden")
      if(!document.getElementById("server-fail")?.classList.contains("hidden")){
        document.getElementById("server-fail")?.classList.add("hidden")
      }
      if(!document.getElementById("server-success")?.classList.contains("hidden")){
        document.getElementById("server-success")?.classList.add("hidden")
      }
    }
  }


  return (
    <div>
      <form action={formAction} className="flex flex-col gap-2">
        <h1 id="itemname" className="text-xl font-semibold mb-4 text-slate-300">{painting}</h1>
        <input type="hidden" name="painting" value={painting} />
        <input type="hidden" name="pathname" value={pathname} />
        <InputForm id="comment" type="textarea" placeholder="Your Requirements..." label="Comment" errors={state}/>
        <InputForm id="buyer" type="text" label="Name" errors={state}/>
        <InputForm id="email" type="text" label="Email" errors={state}/>
        <div id="server-success"  className="hidden">
        <p className="text-green-300 text-[0.8em]">Message Successfully sent.</p> 
        <p className="text-[0.75em]">Contact +91 7583970402 or khanduwangchuk@ymail.com for any more queries</p>
        </div>
        <div id="server-fail"  className="hidden">
        <p className="text-red-200 text-[0.8em]">Server Error</p> 
        <p className="text-[0.75em]">Contact +91 7583970402 / khanduwangchuk@ymail.com for any more queries</p>
        </div>
        <div id="validation-fail"  className="hidden">
        <p className="text-red-200 text-[0.8em]">Please enter the form data correctly!</p> 
        <p className="text-[0.75em]">Contact +91 7583970402 / khanduwangchuk@ymail.com for any more queries</p>
        </div>
        <Button type="submit" label="Submit"/>
      </form>
      
    </div>
  )
}

type InputFormProps = {
    label?: string,
    id: string,
    type?: string,
    placeholder?: string
    errors?: any
  }
  function InputForm({ label, type, id, errors, placeholder }: InputFormProps) {
    
    let inputErr: string[] = [];
    let isError = false;
    if (errors?.[id]?._errors) {
      isError = true;
      inputErr = errors?.[id]?._errors as string[];
    }
    const classError = isError ? 'border-red-500' : 'border-slate-700';
    const inputType = type === 'text' ? 'text' : 'textarea'; 
  
    return (
      <div className="flex flex-col gap-1 transition-all duration-150 ease-in-out">
        {label ? <label htmlFor={id} className="text-slate-500 text-sm">{label}<span className="text-red-300">*</span></label> : <></>}
  
        {inputType === 'text' ? (
          <input
            type={inputType}
            id={id}
            name={id}
            placeholder={placeholder}
            className={`px-2 py-1 rounded-md outline-none bg-slate-300/50 border border-slate-700
                         focus:bg-white focus:border-opacity-0 focus:ring focus:ring-slate-700 focus:text-slate-800${classError}`}
          />
        ) : (
          <textarea
            id={id}
            name={id}
            placeholder={placeholder}
            className={`px-2 py-1 rounded-md outline-none bg-slate-300/50 border border-slate-700
                         focus:bg-white focus:border-opacity-0 focus:ring focus:ring-slate-700 focus:text-slate-800${classError}`}
          />
        )}
  
        {isError && (
          <div className="text-xs bg-red-500 bg-opacity-20 border border-red-500 border-opacity-30 rounded-md p-2 text-red-500">
            {inputErr.map((error, k) => (
              <div key={`err-${id}-${k}`}>{error}</div>
            ))}
          </div>
        )}
      </div>
    );
  }