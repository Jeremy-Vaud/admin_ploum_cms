import Table from "../components/Table";

export default function PageProjects(props) {
    const columns = [
        { name: "titre" },
    ]

    const form = [
        { name: "vignette", type: "image" },
        { name: "titre", type: "text" },
        { name: "description", type: "textarea" },
        { name: "url", type: "texte" }
    ]

    const formUpdate = [
        { name: "vignette", type: "image" },
        { name: "titre", type: "text" },
        { name: "description", type: "textarea" },
        { name: "url", type: "texte" }
    ]

    return (
        <>
            <h1 className="text-2xl text-center mb-6">Utilisateurs</h1>
            <Table table="Model\Projet" columns={columns} form={form} formUpdate={formUpdate} logOut={props.logOut} mode="detail"/>
        </>
    )
}