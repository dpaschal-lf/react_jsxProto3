import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data';

class App extends Component {
  constructor(props){
    super(props);
    this.data = this.props.data;
  }
  createHeader(
  render() {
    console.log('data: ',data);
    return (
      <div className="App">
        <header>
          <h1 className="title">Super Blog!</h1>
          <aside className="userProfile">
            <figure className="avatar">
              <figcaption className="name"></figcaption>
            </figure>
            <div className="quote">Stuff</div>
          </aside>
        </header>
        <aside id="friendList">
          <aside className="userProfile">
            <figure className="avatar">
              <figcaption className="name"></figcaption>
            </figure>
          </aside>
          <aside className="userProfile">
            <figure className="avatar">
              <figcaption className="name"></figcaption>
            </figure>
          </aside>        
        </aside>
        <main>
          <div id="topPosts">
            <div className="post">
              <h5>Title</h5>
              <content>Content</content>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
