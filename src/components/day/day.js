import React from 'react';
import './day.css';
import {Link} from 'react-router-dom';
import Task from '../tasks/task';

const Day = (props)=>{
	function handleClick(){
		console.log('handling click on '+props.date);
		if(props.clickCallback){
			props.clickCallback(props.date);
		}
	}
	function renderTasks(){
		if(props.date===undefined){
			return <Task display="empty" model={props.model} fullDate={props.fullDate}></Task>
		} else {
			return <Task display="short" model={props.model} fullDate={props.fullDate}></Task>
		}
		
	}
	if(props.date!==undefined){
		var clickHandler = handleClick;
		var displayDate = props.date+1;
	} else {
		clickHandler = ()=>{};
		displayDate = ' ';
	}
	let link = null;
	if(props.fullDate){
		link = <Link className="dateLink" to={`/create/${props.fullDate.year}/${props.fullDate.month}/${props.date}`}>{props.date}</Link>;
	} else {
		link = <div className="dateLink empty">{props.date}</div>;
	}
	return (<div className="date" onClick={clickHandler}>{link}{renderTasks()}</div>);
}

export default Day;