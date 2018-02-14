import React from 'react';
import './day.css';

const Day = (props)=>{
	function handleClick(){
		console.log('handling click on '+props.date);
		if(props.clickCallback){
			props.clickCallback(props.date);
		}
	}
	if(props.date!==undefined){
		var clickHandler = handleClick;
		var displayDate = props.date+1;
	} else {
		clickHandler = ()=>{};
		displayDate = ' ';
	}
	return (<div className="date" onClick={clickHandler}>{displayDate}</div>);
}

export default Day;