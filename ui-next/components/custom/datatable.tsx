import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { Input } from "./input";

export const DataTable: NextPage<{
        title:string,
        header:DataTableHeader[],
        items:any[],
        searchField?:string}> = (context) => {
    const [searchText, setSearchText] = useState("")
    const searchField = context.searchField ? context.searchField : null
    const searchFieldHidden = searchField ? false : true
    const filteredItems = searchField ?
        context.items.filter( i => (
            i[searchField]
                .toString()
                .toLowerCase()
                .includes(searchText.toLowerCase())
        )) : context.items
    
    const formatCell = (item:any, column:string, url?: string) =>{
        if(url) {
            const paramStart = url.indexOf('{')+1
            const paramEnd = url.indexOf('}')
            const parameterName = url.substring(paramStart, paramEnd)
            const parameter = item[parameterName]
            const newUrl = url.replace(`{${parameterName}}`,parameter)
            return <>
                <Link href={newUrl}><a>{item[column]}</a></Link>
            </>
        } else {
            return <>{item[column]}</>
        }
    }

    const displayTable = () => {
        if(filteredItems.length>0) {
            return (
                filteredItems.map((i,n) => (
                    <tr key={n}>
                        {
                            context.header.map((h,n2) => (
                                
                                <td className="border border-gray-300 px-4" key={n2}>
                                    {formatCell(i,h.value, h.url)}
                                </td>
                            ))
                        }
                    </tr>
                ))
            )
        } else {
            return (
                <tr>
                    <td colSpan={context.header.length} className="text-center font-thin">No items found</td>
                </tr>
            )
        }
    }
    
    return(
        <>
            <div>
                <h1 className='text-2xl'>{context.title}</h1>
            </div>
            <div className="py-3">
                <Input
                    value={searchText}
                    label="Search"
                    placeholder="Search"
                    onChange={(value:string)=>setSearchText(value)}
                    hidden={searchFieldHidden} />
            </div>
            <table className="table-auto border-collapse border border-gray-400">
                <thead>
                    <tr>
                        {
                            context.header.map((h,n)=>(
                                <th className="border border-gray-300 px-4" key={n}>{h.text}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                        {displayTable()}
                </tbody>
            </table>
        </>
    )
}

export interface DataTableHeader{
    text: string
    value: string
    url?: string
}

export default DataTable