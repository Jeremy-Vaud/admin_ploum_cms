import Table from "../components/Table";

export default function PageUsers() {
    const columns = [
        { name: "nom", type: "string" },
        { name: "prenom", type: "string"  },
        { name: "admin",type:"bool" }
    ]
    return (
        <>
            <h1 className="text-2xl text-center mb-6">Utilisateurs</h1>
            <Table get="table=user" columns={columns} />
        </>
    )
}