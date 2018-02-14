import React, { Component } from 'react';
import './App.css';
import Task from './components/tasks/taskCreateEdit';
import Month from './components/month/month';
import {withRouter, Switch, Route, Link, Redirect} from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props);
    this.handleDateClick = this.handleDateClick.bind(this);
  }
  handleDateClick(year,month,date){
    console.log(`got click on ${year}-${month}-${date}`);
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/:year?/:month?/:day?' component={parentProps=><Month clickCallback={this.handleDateClick} {...parentProps}/>}/>
        </Switch>
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;
