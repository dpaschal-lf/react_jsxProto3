import React, { Component } from 'react';
import Day from '../day/day';
import './month.css';
import {Link} from 'react-router-dom';

class Month extends Component{
	constructor(props){
		super(props);
	    const today = new Date();
	    if(this.params){
		    this.state = {
		      currentYear: parseInt(this.props.match.params.year),
		      currentMonth: parseInt(this.props.match.params.month),
		      currentDay: parseInt(this.props.match.params.day)
		    }	    	
	    } else {
		    this.state = {
		      currentYear: today.getFullYear(),
		      currentMonth: today.getMonth(),
		      currentDay: today.getDate()
		    }	    	
	    }
	    this.handleClick = this.handleClick.bind(this);
	}
	handleClick(date){
		console.log('got click for '+date);
		if(this.props.clickCallback){
			this.props.clickCallback(this.state.currentYear, this.state.currentMonth, date);
		}
	}
	date(){
		const date= new Date();
		date.setYear(this.state.currentYear);
		date.setMonth(this.state.currentMonth);
		date.setDate(this.state.currentDay);
		return date;
	}
	getLastDate(month, year){
		const testDate = this.date();
		testDate.setMonth(month);
		if(year){
			testDate.setYear(year);
		}
		for(let date=28; date<=32; date++){
			testDate.setDate(date);
			if(testDate.getDate()===1){
				return date;
			}
		}
	}
	getDayOfWeek(month, date){
		const testDate = this.date();
		testDate.setMonth(month);
		testDate.setDate(date);
		return testDate.getDay();
	}
	getNextMonthYear(dir){
		console.log(this.history);
		let newMonth;
		let newYear;
		//debugger;
		if(this.props.match.params.year){
			newMonth = parseInt(this.props.match.params.month);
			newYear = parseInt(this.props.match.params.year);			
		} else {
			newMonth = this.state.currentMonth;
			newYear = this.state.currentYear;			
		}

		if(newMonth+dir<0){
		  newMonth=12;
		  newYear--;
		} else if(newMonth+dir>12){
		  newMonth=1;
		  newYear++;
		} else {
		  newMonth+=dir;
		}
		return '/'+newYear + '/' + newMonth + '/' + this.state.currentDay;
	}
	getDatesForMonth(month){
		const startingDay = this.getDayOfWeek(month,0);
		const allDays = [];
		let key = 0;
		while(allDays.length<=startingDay){
			allDays.push(<Day key={key++}/>);
		}
		const lastDate = this.getLastDate(month);
		for(let date=0; date<=lastDate; date++){
			allDays.push(<Day key={key++} date={date} clickCallback={this.handleClick}/>);
		}
		while(allDays.length<35){
			allDays.push(<Day key={key++}/>);
		}
		return allDays;
	}
	render(){
		return(
		<div className="monthContainer">
			<Link className="monthNav" to={this.getNextMonthYear(-1)}>&lt;&lt;&lt;</Link>
			<div className="month">
				{this.getDatesForMonth(this.state.currentMonth)}
			</div>
			<Link className="monthNav" to={this.getNextMonthYear(1)}>&gt;&gt;&gt;</Link>
		</div>
		);
	}
}

export default Month;