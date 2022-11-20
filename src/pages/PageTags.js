import Table from "../components/Table";

export default function PageTags(props) {
    const columns = [
        { name: "nom" },
    ]
    const form = [
        { name: "nom", type: "text" },
    ]

    const formUpdate = [
        { name: "nom", type: "text" },
    ]

    return (
        <>
            <h1 className="text-2xl text-center mb-6">Tags</h1>
            <Table table="Model\Tag" columns={columns} form={form} formUpdate={formUpdate} logOut={props.logOut}/>
        </>
    )
}