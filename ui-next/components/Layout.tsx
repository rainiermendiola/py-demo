import { NextPage } from 'next'
import { NavBar, MenuItem } from './custom/navbar'

const Layout: NextPage = (context) => {
    const Menu:MenuItem[] = [
        {href: '/', name: 'Home'},
        {href: '/items', name: 'Items'},
        {href: '/employees', name: 'Employees'},
    ]
    // console.log(Menu)
    return (
        <>
            <NavBar Menu={Menu}/>
            <div className='container px-4'>{context.children}</div>
        </>
    )
}

export default Layout