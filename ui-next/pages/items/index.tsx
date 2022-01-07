import {server} from '../../config'
import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import {item} from '../../types/items'
import Head from 'next/head'
import { useState } from 'react'
import Input from '../../components/custom/input'
import { DataTable, DataTableHeader } from '../../components/custom/datatable'

const Items: NextPage<{items: item[]}> = ({items}) =>{
    const headers:DataTableHeader[] = [
        { text: 'Category', value: 'ItemCategoryName'},
        { text: 'Item', value: 'ItemName', url:'/items/{ItemId}'},
        { text: 'Price', value: 'ItemPrice'}
    ]
    return (
        <>
            <Head>
                <title>Items</title>
            </Head>
            <DataTable
                title="Items"
                header={headers}
                items={items}
                searchField='ItemName'>
                    <DataTable.Title>
                        <h1 className='text-2xl'>All Items</h1>
                    </DataTable.Title>
                    {/* {{titles: <h1 className='text-4xl'>This is the Title</h1>}} */}
            </DataTable>
            
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch(`${server}/api/items`)
    // const items = await res.json()
    const items:item[] = await res.json()

    return {
        props: {
            items
        },
        revalidate: 10
    }
}

export default Items
