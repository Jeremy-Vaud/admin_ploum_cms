import { v4 as uuidv4 } from 'uuid';
import edit from "../icons/pencil-solid.svg"
import ModalDelete from './ModalDelete';

export default function TableRow(props) {
    return (
        <tr>
            <td className='p-3'>
            <button><img src={edit} className='w-[15px} h-[15px] mr-5'/></button>
                <ModalDelete table={props.table} id={props.data.id} deleteRow={props.deleteRow}/>            
            </td>
            {props.columns.map(column => <td key={uuidv4()}>{props.data[column.name]}</td>)}    
        </tr>       
    )
}