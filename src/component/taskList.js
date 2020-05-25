import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const TaskList = (props) => {
	return(
		props.taskList.map((val, idx) => {

			let projectName = `projectName-${idx}`, task = `task-${idx}`, taskNotes = `taskNotes-${idx}`, taskStatus = `taskStatus-${idx}`
			
			return (
				<tr key={val.index}>
					<td>
						<input type="text" required name="projectName" data-id={idx} id={projectName} className="form-control" />
					</td>
					<td>
						<input type="text" required name="task" data-id={idx} id={task} className="form-control" />
					</td>
					<td>
						<textarea required name="taskNotes" data-id={idx} id={taskNotes} className="form-control"></textarea>
					</td>
					<td>
						<select name="taskStatus" id={taskStatus} data-id={idx} className="form-control">
							<option value="pending">Pending</option>
							<option value="In Progress">In Progress</option>
							<option value="Completed">Completed</option>
							<option value="Hold">Hold</option>
						</select>
					</td>
					<td>
						{
							<button className="btn btn-danger" onClick={(() => props.delete(val))} ><FontAwesomeIcon icon={faMinus} /></button>
						}
					</td>
				</tr>	
			)
		})
	)
}

export default TaskList;