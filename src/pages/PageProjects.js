import Table from "../components/Table";

export default function PageProjects(props) {
    const columns = [
        { name: "titre" },
    ]

    const form = [
        { name: "vignette", type: "image" },
        { name: "titre", type: "text" },
        { name: "description", type: "textarea" },
        { name: "url", type: "texte" },
        { name: "tag", type:"selectMulti", table:"Model\\Tag", key:"nom"}
    ]

    const formUpdate = [
        { name: "vignette", type: "image" },
        { name: "titre", type: "text" },
        { name: "description", type: "textarea" },
        { name: "url", type: "texte" },
        { name: "tag", type:"selectMulti", table:"Model\\Tag", key:"nom"}
    ]

    return (
        <>
            <h1 className="text-2xl text-center mb-6">Projets</h1>
            <Table table="Model\Projet" columns={columns} form={form} formUpdate={formUpdate} logOut={props.logOut} mode="detail"/>
        </>
    )
}