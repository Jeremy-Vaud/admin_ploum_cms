import { Link } from "react-router-dom"


export default function PageHome() {
    const links = [
        { name: "Utilisateur", path: "users", picto: "" },
        { name: "Projets", path: "projects", picto: "" },
        { name: "Tags", path: "tags", picto: "" },
        { name: "Accueil", path: "accueil", picto: "" },
    ]

    return (<>
        <h1 className="text-2xl text-center mb-6">Administration</h1>
        <div className="flex flex-wrap justify-betewen ">
            {links.map(e => {
                return (
                    <Link to={e.path} className="w-64 h-32 text-center rounded shadow-xl border border-gray-800 mx-auto mb-10 inline-block bg-gray-800 hover:bg-yellow-600 transition-color duration-1000 text-gray-300 hover:text-gray-800 text-2xl uppercase">                     
                        <p>{e.name}</p>
                    </Link>
                )
            })}
        </div>
    </>
    )
}