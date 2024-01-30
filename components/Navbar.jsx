import Link from "next/link"

const links = [
    {href: '/about', label: 'About'},
    {href: '/clients', label: 'clients'},
    {href: '/drinks', label: 'drinks'},
    {href: '/tasks', label: 'tasks'},
    {href: '/prisma', label: 'prisma'},
    ]

    const Navbar = () => {
        return (
            <nav className='bg-base-300 py-4'>
                <div className="navbar px-8 mx-w-6xl mx-auto flex-col sm:flex-row">
                    <Link href='/' className='btn btn-primary'> NEXT</Link>
                    <ul className="menu menu-horizontal md:ml-8">
                        {links.map((link) => {
                            return <li key={link.href}>
                                <Link href={link.href} className='capitalize'>
                                    {link.label}
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
            </nav>
        )
    }

    export default  Navbar;