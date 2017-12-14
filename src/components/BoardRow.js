import React, { Component } from 'react';
import '../App.css';

class BoardRow extends Component {
  constructor(props){
    super(props);

    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  toggleFavorite(){
      var data = {};
      data.board_id = this.props.index;
      data.favorite = !this.props.board.favorite;

      this.props.handleFavorite(data);
  }

  render() {
    var start = <i className="fa fa-star-o" aria-hidden="true"></i>;
    if(this.props.board.favorite){
        start = <i className="fa fa-star" aria-hidden="true"></i>;
    }
    const { board } = this.props;
    
    return (
        <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <div className="board" style={{ background: board.background }}>
                <div className="board-title">
                    <div className="row">
                        <div className="col-md-10">
                            <h4>{board.name}</h4>
                        </div>
                        <div className="col-md-2 favorite">
                            <span onClick={this.toggleFavorite}>{start}</span>
                        </div>                    
                    </div>                
                </div>            
            </div>
        </div>
    );
  }
}

export default BoardRow;
