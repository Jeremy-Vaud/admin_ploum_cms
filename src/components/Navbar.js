import { NavLink } from 'react-router-dom'

export default function Navbar(props) {
    const navigation = [
        { name: 'Utilisateurs', href: '/users' },
        // Pages spécifique à ploum studio
        { name: 'Projets', href: '/projects' },
        { name: 'Tags', href: '/tags' },
    ]
    return (
        <div className='flex'>
            <aside className="bg-gray-800 w-[250px]  p-3">
                    <h1 className='text-gray-300 text-2xl pb-3'>Administration</h1>
                    <nav>
                        {navigation.map(e =>
                            <NavLink
                                to={e.href}
                                key={e.name}
                                className={({ isActive }) => {
                                    return 'block no-underline ' + (isActive ? 'text-yellow-600 mb-2' : 'text-gray-300 mb-2')
                                }}>
                                {e.name}
                            </NavLink>
                        )}
                    </nav>
            </aside>
            <div className='p-3 h-screen w-full'>
                {props.children}
            </div>
        </div>
    )
}

