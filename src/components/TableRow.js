import { v4 as uuidv4 } from 'uuid';
import ModalDelete from './ModalDelete';
import ModalUpdate from './ModalUpdate';

export default function TableRow(props) {
    if(!props.hidden) {

    return (
        <tr>
            <td className='p-3'>
                <ModalUpdate table={props.table} data={props.data} formUpdate={props.formUpdate} updateRow={props.updateRow} handleChange={props.handleChange} logOut={props.logOut}/>
                <ModalDelete table={props.table} id={props.data.id} deleteRow={props.deleteRow} logOut={props.logOut}/>            
            </td>
            {props.columns.map(column => <td key={uuidv4()}>{props.data[column.name]}</td>)}    
        </tr>       
    )
    }
}