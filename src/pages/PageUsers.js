import Table from "../components/Table";

export default function PageUsers() {
    const columns = [
        { name: "nom" },
        { name: "prenom" },
        { name: "email" },
        { name: "admin" }
    ]
    const form = [
        { name: "nom", type: "text" },
        { name: "prenom", type: "text" },
        { name: "email", type: "email" },
        { name: "password", type: "password" },
        { name: "admin", type: "checkbox" }
    ]

    const formUpdate = [
        { name: "nom", type: "text" },
        { name: "prenom", type: "text" },
        { name: "email", type: "email" },
        { name: "admin", type: "checkbox" }
    ]

    return (
        <>
            <h1 className="text-2xl text-center mb-6">Utilisateurs</h1>
            <Table table="user" columns={columns} form={form} formUpdate={formUpdate} />
        </>
    )
}