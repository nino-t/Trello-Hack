import React, { Component } from 'react';
import './App.css';

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
                favorite: true,
                background: ''
              }
            ]
          }          
        ]
    }

    this.newBoard = this.newBoard.bind(this);
    this.favoriteHandle = this.favoriteHandle.bind(this);
    this.handleNewGroup = this.handleNewGroup.bind(this);
  }

  favoriteHandle(value){
    var state = this.state.board_group[value.group_id].boards[value.board_id];
    state.favorite = value.favorite;

    this.setState({
      state
    });    
  }

  newBoard(value){
    var state = this.state.board_group[value.group_id].boards;
    var data = Object.assign({}, value);
    delete data.group_id;    
    state.push(data);

    this.setState({
      state
    });

    console.log(state);
  }

  handleNewGroup(value){
    var state = this.state.board_group;
    var data = {};

    data.name = value.group_name;
    data.boards = [];
    state.push(data);

    this.setState({
      state
    })

    console.log(state);
  }

  starred_boards(){
    const state = this.state.board_group;
    var boards = [];
    state.map((category, index) => { 
      category.boards.map((board, i) => {
        if (board.favorite) {
          boards.push(board);
        }
      })
    })

    return boards;
  }

  isFavorite(condition){
    var result = <i className="fa fa-star-o" aria-hidden="true"></i>;
    if (condition) {     
      result = <i className="fa fa-star" aria-hidden="true"></i>;      
    }

    return result;
  }

  render() {
    const { board_group } = this.state;
    const starred_boards = this.starred_boards();

    return (
      <div className="app" style={{marginBottom: '50px'}}>      
        <div className="container">
          <div className={"row " + (starred_boards.length < 1 ? 'hidden':'')}>
           <h4 style={{ marginLeft: '12px' }}>Starred Boards</h4>
           {
             starred_boards.map((board, index) => 
              <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                <div className="board" style={{ background: board.background }}>
                  <div className="board-title">
                    <div className="row">
                      <div className="col-md-10">
                       <h4>{board.name}</h4>
                      </div>
                      <div className="col-md-2 favorite">
                       <span>{this.isFavorite(board.favorite)}</span>
                      </div>                    
                    </div>                
                  </div>            
                </div>
              </div>
             )
           }
           <div className="clearfix"></div>
          </div>
          
          <br />
          <br />

          <BoardScreen 
            board_group={board_group} 
            newBoard={this.newBoard} 
            favoriteBoard={this.favoriteHandle} 
            newBoardGroup={this.handleNewGroup} />
        </div>
      </div>
    );
  }
}

export default App;
