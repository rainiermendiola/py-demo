import { NextPage } from "next"

export const Label: NextPage<{text:string,label:string}> = (context) =>{
    const {text, label} = context
    return (
        <div>
            <label className="font-bold pr-4" htmlFor={label}>{label}</label>
            <span id={label}>{text}</span>
        </div>
    )
}

export default Label