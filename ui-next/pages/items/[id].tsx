import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from "next"
import { server } from "../../config"
import {item} from '../../types/items'
import Link from 'next/link'
import {Label} from '../../components/custom/label'

const ItemsById: NextPage<{item:item}> = (context) => {
    const {item} = context
    return (
        <>
            <Label text={item.ItemCategoryName} label="Category"></Label>
            <Label text={item.ItemName} label="Item"></Label>
            <Label text={item.ItemPrice.toString()} label="Price"></Label>
            <div className="pt-5">
                <Link href="/items"><a>Go Back</a></Link>
            </div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(`${server}/api/items/${context.params?.id}`)
    const item:item = await res.json()
    // console.log(item)

    return {
        props: {
            item
        }
    }
}

// export const getStaticPaths: GetStaticPaths = async (context) => {
//     const res = await fetch(`${server}/api/items`)
//     const items:item[] = await res.json()
//     const ids = items.map(i=>i.ItemId)
//     const paths = ids.map(i=>({params:{id:i.toString()}}))
//     return {
//         paths,
//         fallback: false
//     }
// }

export default ItemsById