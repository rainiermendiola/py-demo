import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { server } from '../../config'
import {employee} from '../../types/employees'
import Link from 'next/link'
const EmployeesById: NextPage<{employee:employee}> = (employee) => {
    return <>
        Company: {employee.employee.company_name} <br />
        First Name: {employee.employee.first_name} <br />
        Last Name: {employee.employee.last_name} <br />
        <Link href="/employees"><a>Go Back</a></Link>
    </>
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const res = await fetch(`${server}/api/employees/${context.params!.id}`)
    const employee:employee = await res.json()

    return {
        props: {
            employee
        }
    }
}

// export const getStaticPaths: GetStaticPaths = async () => {
//     const res = await fetch(`${server}/api/employees/`)
//     const employees:employee[] = await res.json()

//     const ids = employees.map(m => m.id)
//     const paths = ids.map(id => ({params: {id: id.toString()}}))

//     return {
//         paths,
//         fallback: false
//     }
// }

export default EmployeesById