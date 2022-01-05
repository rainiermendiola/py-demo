import {server} from '../../config'
import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import {employee} from '../../types/employees'
import { DataTableHeader, DataTable } from '../../components/custom/datatable'
import Head from 'next/head'

const Employees: NextPage<{employees: employee[]}> = (context) =>{
    const header:DataTableHeader[] = [
        {text: 'First Name', value: 'first_name', url: '/employees/{id}'},
        {text: 'Last Name', value: 'last_name'}
    ]
    return (
        <>
            <Head>
                <title>Employees</title>
            </Head>
            <DataTable
                title="Employees"
                header={header}
                items={context.employees}
                searchField='first_name'/>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch(`${server}/api/employees`)
    // const items = await res.json()
    const employees:employee[] = await res.json()

    return {
        props: {
            employees
        },
        revalidate: 10
    }
}

export default Employees
