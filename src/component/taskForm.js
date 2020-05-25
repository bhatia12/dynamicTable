import React from "react";
import TaskList from "./taskList"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons';

class Form extends React.Component {
	state = {
		taskList: [{index: Math.random(), projectName: "", task: "", taskNotes:"", taskStatus:""}],
		date: "",
		description: "",	
	}

	handleChange = (e) => {
		if(["projectName", "task", "taskNotes", "taskStatus"].includes(e.target.name)) {
			let TaskList = [...this.state.taskList]
			TaskList[e.target.dataset.id][e.target.name] = e.target.value;
		} else {
			this.setState({ [e.target.name] : e.target.value})
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		let data =  this.state
		console.log(data); 
	}

	addNewRow = (e) => {
		this.setState((prevState) => ({
			taskList: [...prevState.taskList, {index: Math.random(), projectName: "", task: "", taskNotes:"", taskStatus:""}]
		}));
	}

	// deleteRow = (index) => {
	// 	this.setState({
	// 		taskList: this.state.taskList.filter((s, sindex) => index !=sindex)
	// 	});
	// }

	clickOnDelete(record) {
        this.setState({
            taskList: this.state.taskList.filter(r => r !== record,)
        });
    }


	render(){
		let {taskList} = this.state
		return (
			<div className="content">
                <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                	<div className="row" style={{marginTop:20}}>
                		// <div className="col-sm-1"></div>
                		<div className="col-sm-10">
                			<div className="card">
                				<div className="card-header text-center">Add Your Daily Task</div>
                				<div className="card-body">
                					<div className="row">
                						<div className="col-sm-4">
                							<div className="form-group">
                								<label>Date</label>
                								<input type="date" required name="date" id="date" className="form-control" placeholder="Enter Date"/>
                							</div>
                						</div>
                						<div className="col-sm-4">
                							<div className="form-group">
                								<label>Description</label>
                								<textarea name="description" id="description" className="form-control"></textarea>
                							</div>
                						</div>
                					</div>
                					<table className="table">
                                        <thead>
                                            <tr>
                                                <th className="required" >Project Name</th>
                                                <th className="required" >Task</th>
                                                <th>Notes</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <TaskList delete={this.clickOnDelete.bind(this)} add={this.addNewRow}taskList={taskList} />
                                        </tbody>
                                        <tfoot>
                                            <tr><td colSpan="4">
                                                <button onClick={this.addNewRow} type="button" className="btn btn-primary text-center"><FontAwesomeIcon icon={faPlus} /></button>
                                            </td></tr>
                                        </tfoot>
                                    </table>
                				</div>
                				<div className="card-footer text-center"> 
                					<button type="submit" className="btn btn-primary text-center">Submit</button>
                				</div>	
                			</div>
                		</div>
                	</div>	
                </form>
			</div>
		)
	}
}

export default Form;