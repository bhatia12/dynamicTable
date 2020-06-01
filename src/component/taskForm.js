import React, {Fragment} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faCheck  } from '@fortawesome/free-solid-svg-icons';


class Form extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			taskList: [],
			addClass: false	,
			loadComponent:false,
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

	filterOption = (e) => {
		if (e.target.value != "all"){
			var filteredData = this.state.copyTask.filter(function(item) {
          		return item.taskStatus == e.target.value;
        	});
			this.setState({taskList:filteredData})
		}
		else{
			this.setState({taskList:this.state.copyTask})
		}
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
		this.setState({projectName: "",task:"",taskNotes:"",taskStatus:"",taskList:localTaskList,copyTask:localTaskList, addClass: !this.state.addClass,loadComponent:false});
 	}

	addNewRow = (e) => {
		this.setState((prevState) => ({
			taskList: [...prevState.taskList],loadComponent:true})); 
		console.log(this.state.taskList)
	}

	
	deleteRow= (index, e) =>{

	 const users = Object.assign([], this.state.taskList);
	 var index = users.findIndex(x => x.index===index)
	 if (window.confirm("Delete the item?")) {
	 	users.splice(index, 1);
	 }	
	 this.setState({taskList:users})
	 console.log(users);

	}

	// clickOnDelete=(index) => {
	// 	if (window.confirm("Delete the item?")) {
	//         this.setState({taskList: this.state.taskList})
 //    	}
 //    }


render(){
	let btn = this.state.addClass ? "enableLable" : "disableLable"
	let loadComponent = this.state.loadComponent
	let {taskList} = this.state
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
                					<table className="table">
                                        <thead>
                                            <tr>
                                                <th className="required" >Project Name</th>
                                                <th className="required" >Task</th>
                                                <th>Notes</th>
                                                <th>Status 
                                                	<select name="taskStatus"  className="form-control" onChange={this.filterOption} >
																<option value ="all">All</option>
																<option value="pending">Pending</option>
																<option value="In Progress">In Progress</option>
																<option value="Completed">Completed</option>
																<option value="Hold">Hold</option>

															</select>
                                                </th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        	{this.state.taskList.map(row => 
                                        			<tr>
		    											<td>{row.projectName}</td>
		    											<td>{row.task}</td>
		    											<td>{row.taskNotes}</td>
		    											<td>{row.taskStatus}</td>
		    											<td>
															<button className="btn btn-danger" onClick={() => this.deleteRow()}><FontAwesomeIcon icon={faMinus} /></button>
														</td>
													</tr>
		    									)}
                                        	{
                                        		loadComponent &&
                                        		<Fragment>
	                                        		<tr className={btn}>
		                                            	<td>
															<input type="text" required name="projectName" className="form-control" onChange={this.handleChange} />
														</td>
														<td>
															<input type="text" required name="task" className="form-control" onChange={this.handleChange} />
														</td>
														<td>
															<textarea required name="taskNotes" className="form-control" onChange={this.handleChange} ></textarea>
														</td>
														<td>
															<select name="taskStatus"  className="form-control" onChange={this.handleChange} >
																<option value="pending">Pending</option>
																<option value="In Progress">In Progress</option>
																<option value="Completed">Completed</option>
																<option value="Hold">Hold</option>
															</select>
														</td>
														<td>
															<button  className="btn btn-success"onClick={(() => this.handleSubmit())}><FontAwesomeIcon icon={faCheck} /></button>
														</td>
														<td>
															<button className="btn btn-danger"><FontAwesomeIcon icon={faMinus} /></button>
														</td>
													</tr>
												</Fragment>
                                        	}

                                   		</tbody>
                                    </table>
                				</div>	
                			</div>
                		</div>
                	</div>	
			</div>
		)
	}
}

export default Form;