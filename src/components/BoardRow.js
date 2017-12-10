import React, { Component } from 'react';
import '../App.css';

class BoardRow extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { board } = this.props;
    return (
        <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <div className="board">
                <div className="board-title">
                    <h4>{board.name}</h4>
                </div>            
            </div>
        </div>
    );
  }
}

export default BoardRow;
