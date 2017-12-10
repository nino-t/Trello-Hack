import React, { Component } from 'react';
import '../App.css';

import BoardRow from './BoardRow';

class BoardGroup extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { group } = this.props;
    return (
        <div className="board-group">
            <h4>{group.name}</h4>
            <div className="row">
                {
                    group.boards.map((board, index) => (
                        <BoardRow board={board} key={index} />
                    ))
                }
                <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                    <div className="board-new">
                        <div className="board-title-create">
                            <h4>Create new board...</h4>
                        </div>            
                    </div>
                </div>                
            </div>
        </div>
    );
  }
}

export default BoardGroup;
