import React from 'react';
import { Tr, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const TableData = props => {
    return props.taskList.map((row) => {
    return (
        <Tr key={row.id}>
            <Td>{row.id}</Td>
			<Td>{row.name}</Td>
			<Td>{row.email}</Td>
			<Td>{row.body}</Td>
        </Tr>  
        )
    })
}

export default TableData;