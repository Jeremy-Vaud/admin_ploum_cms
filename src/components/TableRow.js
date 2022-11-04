import { v4 as uuidv4 } from 'uuid';
import ModalDelete from './ModalDelete';
import ModalUpdate from './ModalUpdate';

export default function TableRow(props) {
    return (
        <tr>
            <td className='p-3'>
                <ModalUpdate table={props.table} data={props.data} formUpdate={props.formUpdate} updateRow={props.updateRow} handleChange={props.handleChange}/>
                <ModalDelete table={props.table} id={props.data.id} deleteRow={props.deleteRow}/>            
            </td>
            {props.columns.map(column => <td key={uuidv4()}>{props.data[column.name]}</td>)}    
        </tr>       
    )
}