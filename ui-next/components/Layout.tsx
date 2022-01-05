import { NavBar, MenuItem } from './custom/navbar'

const Layout = ({children} : {children: React.ReactNode}) => {
    const Menu:MenuItem[] = [
        {href: '/', name: 'Home'},
        {href: '/items', name: 'Items'},
        {href: '/employees', name: 'Employees'},
    ]
    // console.log(Menu)
    return (
        <>
            <NavBar Menu={Menu}/>
            <div className='container px-4'>{children}</div>
        </>
    )
}

export default Layout