import React, { Component } from 'react';
import './App.css';
import Task from './components/tasks/taskCreateEdit';
import Month from './components/month/month';
import {withRouter, Switch, Route, Link, Redirect} from 'react-router-dom'
import TaskCreateEdit from './components/tasks/taskCreateEdit';
import TodoModel from './components/todoModel/todoModel';

class App extends Component {
  constructor(props){
    super(props);
    this.handleDateClick = this.handleDateClick.bind(this);
    this.model = new TodoModel();
  }
  handleDateClick(year,month,date){
    console.log(`got click on ${year}-${month}-${date}`);

  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/:year?/:month?/:day?' component={parentProps=><Month clickCallback={this.handleDateClick} model={this.model} {...parentProps}/>}/>
          <Route exact path="/create/:year/:month/:day" component={parentProps=><TaskCreateEdit model={this.model} {...parentProps}/>}/>
        </Switch>
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;
