import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid'
import TableHead from "./TableHead"
import TableRow from "./TableRow"
import ModalInsert from "./ModalInsert"

export default function Table(props) {
    const [data, setData] = useState([])
    const [sortState, setSortState] = useState([])


    function initSortState() {
        let array = []
        props.columns.map(e => array[e.name] = "default")
        setSortState(array)
    }

    function sort(e) {
        setData(
            [...data].sort((a, b) => {
                if (a[e] < b[e]) {
                    if (sortState[e] === "sort") {
                        return 1
                    } else {
                        return -1
                    }
                }
                if (a[e] > b[e]) {
                    if (sortState[e] === "sort") {
                        return -1
                    } else {
                        return 1
                    }
                }
                return 0;
            })
        )
        let array = []
        props.columns.map(row => {
            if (row.name === e) {
                if (sortState[e] === "sort") {
                    array[e] = "reverse"
                } else {
                    array[e] = "sort"
                }
            } else {
                array[row.name] = "default"
            }
        })
        setSortState(array)
    }

    function insert(line) {
        line.id = parseInt(line.id)
        setData([...data, line])
    }

    function deleteRow(id) {
        let array = []
        data.map((e) => {
            if(e.id !== id) {
                array.push(e)
            }
        })
        setData(array)
    }

    function updateRow(response) {
        let array = []
        data.map((e) => {
            if(e.id !== response.id) {
                array.push(e)
            }else{
                array.push(response)
            }
        })
        setData(array)
    }

    useEffect(() => {
        fetch('http://localhost:80/backend_ploum_cms/admin/api.php?table=' + props.table + '&id=all')
            .then((response) => {
                if (response.status === 404) {
                    throw new Error('not found')
                } else if (!response.ok) {
                    throw new Error('response not ok')
                }
                return response.json()
            })
            .then((result) => {
                setData(result)
                initSortState()
            })
            .catch((e) => {
                console.log(e.message)
            })
    }, [])

    return (
        <>
            <div>
                <ModalInsert form={props.form} table={props.table} insert={insert} />
            </div>
            <table className="w-full">
                <TableHead sort={sort} columns={props.columns} sortState={sortState} deleteRow={deleteRow} />
                <tbody>
                    {data ? data.map(e => <TableRow key={uuidv4()} table={props.table} data={e} columns={props.columns} deleteRow={deleteRow} formUpdate={props.formUpdate} updateRow={updateRow} />) : null}
                </tbody>
            </table>
        </>
    )
}