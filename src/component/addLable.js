import React from 'react';
import { Tr, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus  } from '@fortawesome/free-solid-svg-icons';

const AddLable = props => {
    return props.taskList.map((row) => {
    return (
          <Tr key={row.index}>
                <Td></Td>
                <Td>{row.projectName}</Td>
		        <Td>{row.task}</Td>
		    	<Td>{row.taskNotes}</Td>
		        <Td>{row.taskStatus}</Td>
                <Td>
					<button className="btn btn-danger" onClick={(() => props.delete(row))} ><FontAwesomeIcon icon={faMinus} /></button>
				</Td>
          </Tr>  
        )
    })
}

export default AddLable;