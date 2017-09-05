import React, { Component } from 'react';
import './App.css';
import Friends from './components/FriendsList'

class App extends Component {
  render() {
    return (
      <div>
        <Friends></Friends>
        <h1>The <strong>facebook</strong> Friend Machine</h1>
        
        <div className="friends">
        
        </div>
    </div>
    );
  }
}

export default App;
