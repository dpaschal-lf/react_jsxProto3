import React, { Component } from 'react';
import Task from './task';
import './taskCreateEdit.css';

class TaskCreateEdit extends Component{
	constructor(props){
		super(props);
		this.state = {
			title: '',
			description: '',
			error: ''
		}
		this.updateInput = this.updateInput.bind(this);
		this.saveChange = this.saveChange.bind(this);
		this.cancelChange = this.cancelChange.bind(this);
	}
	updateInput(event){
		const possibleFields = ['title','description'];
		if(possibleFields.indexOf(event.target.getAttribute('name'))===-1){
			console.error('cannot update the field '+event.target.getAttribute('name'));
		} else {
			const newState = {};
			newState[event.target.getAttribute('name')] = event.target.value;
			this.setState(newState);
			console.log(newState);
		}
	}
	saveChange(){
		const saveData = {
			year: this.props.match.params.year,
			month: this.props.match.params.month,
			day: this.props.match.params.day,
			title: this.state.title,
			description: this.state.description
		}
		if(this.props.model.saveItem(saveData)!==false){
			this.props.history.goBack();
		} else {
			this.state.error = 'Unable to save data'
		}
	}
	cancelChange(){
		this.props.history.goBack();
	}
	render(){
		return(
			<div>
				<span className="errorMessage">{this.state.error}</span>
				<div className="todoDate">{this.props.match.params.year}/{this.props.match.params.month}/{this.props.match.params.day}</div>
				<input name="title" className="title" onChange={this.updateInput} placeholder="enter a title: eg get eggs"/>
				<textarea name="description" className="description" onChange={this.updateInput} placeholder="enter a longer description: eg get 12 dozen eggs from supermarket" />
				<button className="confirmButton" onClick={this.saveChange}>Save</button> 
				<button className="denyButton" onClick={this.cancelChange}>Cancel</button>
			</div>

		)
	}
}

export default TaskCreateEdit;