import { v4 as uuidv4 } from 'uuid';

export default function TableRow(props) {
    return (
        <tr>
            {props.columns.map(column => <td key={uuidv4()}>{props.data[column.name]}</td>)}
        </tr>       
    )
}