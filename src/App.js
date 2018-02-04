import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.data = this.props.data;
  }
  createHeader(user){
    return (
        <header className="topHeader">
          <h1 className="title">Super Blog!</h1>
          {this.createUserProfile(user)}
        </header>
    );
  }
  createUserProfile(user, index=-1){
    let favoriteQuoteElement= null;
    if(user.hasOwnProperty('favoriteQuotes') && user.favoriteQuotes.length>0){
      const quoteIndex = (Math.random()*user.favoriteQuotes.length)>>0;
      favoriteQuoteElement = <div className="quote">{user.favoriteQuotes[quoteIndex]}</div>
    } 
    return (
      <aside className="userProfile" key={index}>
        { favoriteQuoteElement }
        <div className="avatar" style={{ backgroundImage: `url(${user.avatar})`}}>
          <figcaption className="name">{user.name}</figcaption>
        </div>     
      </aside>
    )
  }
  createFriendList(friends){

    const friendsOnline = friends.reduce( (count, singleFriend) => {
      return count + (singleFriend.status === 'online' ? 1 : 0);
    }, 0);
    console.log('online: ' + friendsOnline);
    return (
      <aside id="friendList">
        <div className="friendTab">
          <div className="friendList-online" style={{ backgroundColor: `rgba(${(friendsOnline ? '0,255,0,.5': '175,175,175,.5')}`}}>
            {friendsOnline}
          </div>
        </div>
        {friends.map( (singleFriend,index) => this.createUserProfile(singleFriend, index))}
      </aside>
    )
  }
  displayBlogList(blogs){
    return blogs.map( (singleBlog, index) => this.displaySingleBlogSummary(singleBlog, index))
  }
  displaySingleBlogSummary(post, index){
    return (
      <div className="post" key={index}>
        <div className="postTitle">{post.title}</div>
        <article>{post.content}</article>
      </div>
    )
  }
  render() {
    console.log('data: ',this.data);
    return (
      <div className="App">
        {this.createHeader(this.data.user)}
        {this.createFriendList(this.data.user.friendsList)}
        <main>
          <div id="topPosts">
            <h3>Top Posts:</h3>
            {this.displayBlogList(this.data.pageData.topPosts)}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
