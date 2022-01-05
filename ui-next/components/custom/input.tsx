import { NextPage } from "next"
import { useState } from "react"

export const Input: NextPage<{value:string, label:string, onChange:any, hidden?:boolean, placeholder?:string}> = (context) =>{
    const [lValue, setValue] = useState(context.value)
    const update = (lValue:string) => {
        setValue(lValue)
        context.onChange(lValue)
    }
    const hidden = context.hidden ? true : false
    
    if(!hidden)
        return (
            <>
                <label className="pr-3 font-bold">{context.label}</label>
                <input
                    type="text"
                    value={lValue}
                    onChange={e => update(e.target.value)}
                    className="default:border-solid border-2 border-slate-300 pl-1"
                    placeholder={context.placeholder}
                />
            </>
        )
    
    return <></>
}

export default Input