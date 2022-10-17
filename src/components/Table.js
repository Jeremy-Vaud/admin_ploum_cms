import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import TableHead from "./TableHead";
import TableRow from "./TableRow";

export default function Table(props) {
    const [data, setData] = useState([])
    const [error, setError] = useState(true)
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

    useEffect(() => {
        fetch('http://localhost:80/backend_ploum_cms/admin/api.php?' + props.get)
            .then((response) => {
                if (response.status === 404) {
                    throw new Error('not found')
                } else if (!response.ok) {
                    throw new Error('response not ok')
                }
                return response.json()
            })
            .then((result) => {
                setError(false)
                setData(result)
                initSortState()
            })
            .catch((e) => {
                setError(true)
                console.log(e.message)
            })
    }, [])

    return (
        <table className="w-full">
            <TableHead sort={sort} columns={props.columns} sortState={sortState} />
            <tbody>
                {data ? data.map(e => <TableRow key={uuidv4()} data={e} columns={props.columns} />) : null}
            </tbody>
        </table>
    )
}