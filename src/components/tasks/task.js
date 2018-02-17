import React, { Component } from 'react';
import './task.css';

class Task extends Component{
	constructor(props){
		super(props);
	}
	renderAllTasks(){
		const fullDate = this.props.fullDate;
		
		if(this.props.display!=='empty'){
			let tasks = this.props.model.getItem(fullDate.year, fullDate.month, fullDate.date);
			let taskMode = 'render'+this.props.display+'Task';
			if(tasks){
				console.log(taskMode);
				return tasks.map( (task, index) => this[taskMode](task, index));
			}	
		} 
		return <div></div>
		
	}
	rendershortTask(task, index){
		return <div key={index} className='taskItem'>{task.title}</div>;
	}
	renderlongTask(task, index){
		return (
			<div key={index} className="taskItem long">
				<div className='taskTitle'>{task.title}</div>
				<div className='taskDescription'>{task.description}</div>
			</div>);
	}
	render(){
		return (
			<div>{this.renderAllTasks()}</div>
		)
	}
}

export default Task;