import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faFolder, faTags, faHome } from '@fortawesome/free-solid-svg-icons'


export default function PageHome() {
    const links = [
        { name: "Utilisateurs", path: "users", picto: faUsers },
        { name: "Projets", path: "projects", picto: faFolder },
        { name: "Tags", path: "tags", picto: faTags },
        { name: "Page d'accueil", path: "accueil", picto: faHome },
    ]

    return (<>
        <h1 className="text-2xl text-center mb-6">Administration</h1>
        
        <div className="flex flex-wrap justify-betewen ">
            {links.map(e => {
                return (
                    <Link to={e.path} className="w-64 h-32 text-center rounded shadow-xl border border-gray-800 mx-auto mb-10 inline-block bg-gray-800 hover:bg-yellow-600 transition-color duration-1000 text-gray-300 hover:text-gray-800 text-xl uppercase p-6">
                        <FontAwesomeIcon icon={e.picto} />                  
                        <p>{e.name}</p>
                    </Link>
                )
            })}
        </div>
    </>
    )
}