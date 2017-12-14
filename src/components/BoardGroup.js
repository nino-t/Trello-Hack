import React, { Component } from 'react';
import '../App.css';

import BoardRow from './BoardRow';
import ModalScreen from './ModalScreen';

class BoardGroup extends Component {
  constructor(props){
    super(props);
    this.state = {
        open: false
    }
    this.submitData = this.submitData.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);    
  }

  submitData(data){
      data.group_id = this.props.index;
      this.props.addBoard(data);
  }

  convertToSlug(Text)
  {
      return Text
        .toString()
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'');
  }  

  handleModal(e){
    this.setState({ open: e });
  }

  handleFavorite(e){
      e.group_id = this.props.index;
      this.props.handleFavorite(e);
  }

  render() {
    const { group } = this.props;
    return (
        <div className="board-group">
            <h4>{group.name}</h4>
            <div className="row">
                {
                    group.boards.map((board, index) => (
                        <BoardRow board={board} key={index} index={index} handleFavorite={this.handleFavorite} />
                    ))
                }
                <a onClick={() => this.handleModal(true)}>
                    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                        <div className="board-new">
                            <div className="board-title-create">
                                <h4>Create new board...</h4>
                            </div>            
                        </div>
                    </div>                                
                </a>
            </div>
            <ModalScreen open={this.state.open} data={this.submitData} openModal={this.handleModal} />
        </div>
    );
  }
}

export default BoardGroup;
