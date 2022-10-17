import { v4 as uuidv4 } from 'uuid';
import edit from "../icons/pencil-solid.svg"
import trash from "../icons/trash-can-solid.svg"

export default function TableRow(props) {
    return (
        <tr>
            <td className='space-x-3 p-3'>
                <button><img src={edit} className='w-[15px} h-[15px]'/></button>
                <button><img src={trash} className='w-[15px} h-[15px]'/></button>
            </td>
            {props.columns.map(column => <td key={uuidv4()}>{props.data[column.name]}</td>)}    
        </tr>       
    )
}