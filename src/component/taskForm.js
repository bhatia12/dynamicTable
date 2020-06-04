import React, {Fragment} from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faCheck  } from '@fortawesome/free-solid-svg-icons';
import AddLable from './addLable'


class Form extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			taskList: [],
			loadComponent:false,
			addClass: false,
			projectName: "",
			task:"",
			taskNotes:"",
			taskStatus:"",
			index: 0,
			copyTask: []
		}
		
	}
	handleChange = (e) => {
		
		this.setState({ [e.target.name] : e.target.value})
		
	}



	filterStatus = (e) => {
		if (e.target.value !== "all"){
			var filteredData = this.state.copyTask.filter(function(item) {
          		return item.taskStatus === e.target.value;
        	});
			this.setState({taskList:filteredData})
		}
		else{
			this.setState({taskList:this.state.copyTask})
		}
	}

	editOption = (e) => {
		this.setState({
			addClass: true
		})
	}

	handleSubmit = (e) => {
		let data =  this.state
		console.log(data)
		let newTask = {index:this.state.index++,
		projectName: this.state.projectName,
		task:this.state.task,
		taskNotes:this.state.taskNotes,
		taskStatus:this.state.taskStatus}
		let localTaskList = this.state.taskList
		localTaskList.push(newTask)
		this.setState({projectName: "",task: "",taskNotes: "",taskStatus: "",taskList:localTaskList,copyTask:localTaskList, loadComponent:false, addClass: false});
 		
 	}

	addNewRow = (e) => {
		this.setState((prevState) => ({
			taskList: [...prevState.taskList],loadComponent:true})); 
		console.log(this.state.taskList)
	}

	
	deleteRow= (index, e) => {
	// const users = Object.assign([], this.state.taskList);
	// if (window.confirm("Delete the item?")) {
	//  users.splice(index, 1);
	// }	
	// this.setState({taskList:users})
		if (window.confirm("Delete the item?")){
			this.setState({
				taskList: this.state.taskList.filter(r => r !== index)
			});
		}
	}

render(){
	let loadComponent = this.state.loadComponent
	let { taskList } = this.state
	
		return (
		<div className="content">
            <div className="row" style={{marginTop:20}}>
                <div className="col-sm-1"></div>
                	<div className="col-sm-10">
                		<div className="card">
                			<div className="card-header text-center">Add Your Daily Task
                				<button onClick={this.addNewRow} type="button" className="btn btn-primary float-right"><FontAwesomeIcon icon={faPlus} /></button>
                			</div>
                			<div className="card-body">
                				<Table className="table">
                                    <Thead>
                                        <Tr>
                                            <Th className="required" >Project Name</Th>
                                            <Th className="required" >Task</Th>
                                            <Th>Notes</Th>
                                            <Th>Status 
                                                <select name="taskStatus"  className="form-control" onChange={this.filterStatus} >
													<option value ="all">All</option>
													<option value="pending">Pending</option>
													<option value="In Progress">In Progress</option>
													<option value="Completed">Completed</option>
													<option value="Hold">Hold</option>
												</select>
                                            </Th>
                                            <Th>Action</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <AddLable taskList={taskList} delete={this.deleteRow.bind(this)}></AddLable>
                                        {
                                        	loadComponent &&
                                        	<Fragment>
	                                        	<Tr>
		                                            <Td>
														<input type="text" required name="projectName" className="form-control" onChange={this.handleChange} />
													</Td>
													<Td>
														<input type="text" required name="task" className="form-control" onChange={this.handleChange} />
													</Td>
													<Td>
														<textarea required name="taskNotes" className="form-control" onChange={this.handleChange} ></textarea>
													</Td>
													<Td>
														<select name="taskStatus"  className="form-control" onChange={this.handleChange} >
															<option value="pending">Pending</option>
															<option value="In Progress">In Progress</option>
															<option value="Completed">Completed</option>
															<option value="Hold">Hold</option>
														</select>
													</Td>
													<Td>
														<button  className="btn btn-success" style={{marginRight:8}} onClick={(() => this.handleSubmit())}><FontAwesomeIcon icon={faCheck} /></button>
														<button className="btn btn-danger" onClick><FontAwesomeIcon icon={faMinus} /></button>
													</Td>
									
												</Tr>
											</Fragment>
                                        }
                                    </Tbody>
                                </Table>
                			</div>	
                		</div>
                	</div>
                </div>	
			</div>
		)
	}
}

export default Form;