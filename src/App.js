import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import BoardScreen from './components/BoardScreen';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      board_group : 
        [
          {
            name: 'Personal Boards',
            boards: [
              {
                name: 'Hitpay',
                favorite: false,
                background: ''
              }
            ]
          },
          {
            name: 'Tsuki Studio',
            boards: [
              {
                name: 'Destine Digital HQ',
                favorite: false,
                background: ''
              }
            ]
          }          
        ]
    }
  }

  render() {
    const { board_group } = this.state;
    return (
      <div className="app">
        <Navbar />
        <div className="container">
          <BoardScreen board_group={board_group} />
        </div>        
      </div>
    );
  }
}

export default App;
