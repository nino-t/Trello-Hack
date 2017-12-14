import React, { Component } from 'react';

import BoardGroup from './BoardGroup';
import ModalScreen from './BoardGroup/ModalScreen';

class BoardScreen extends Component {
  constructor(props){
    super(props);

    this.state = {
      open: false
    }

    this.handleNewBoard = this.handleNewBoard.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleNewGroup = this.handleNewGroup.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  handleNewBoard(value){
    this.props.newBoard(value);
  }

  handleFavorite(value){    
    this.props.favoriteBoard(value);
  }

  handleNewGroup(value){
    this.props.newBoardGroup(value);
  }

  handleModal(e){
    this.setState({
      open: e
    })
  }


  render() {
    const { board_group } = this.props;
    return (
      <div>
          {
            board_group.map((group, index) => (
                <BoardGroup 
                  group={group} 
                  key={index} 
                  addBoard={this.handleNewBoard} 
                  index={index} 
                  handleFavorite={this.handleFavorite} />
            ))
          }

          <div>
            <button 
              type="button" 
              className="btn btn-primary col-md-12"
              onClick={this.handleModal}><i className="fa fa-users"></i> New Group Board</button>           

            <ModalScreen 
              newGroup={this.handleNewGroup} 
              open={this.state.open} 
              openModal={this.handleModal} />
          </div>
      </div>
   )
  }
}

export default BoardScreen;
