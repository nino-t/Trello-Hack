import React from 'react';

import '../styles/app.css';

const isFavorite = (favorite) => {
  var result = <i className="fa fa-star-o" aria-hidden="true"></i>;
  if (favorite) {     
    result = <i className="fa fa-star" aria-hidden="true"></i>;      
  }
  return result;
}

const Board = (board) => (
  <div className="col-md-3">
    <div className="board" style={{ background: board.color }}>
      <div className="board-title">
         <div className="row">
           <div className="col-md-10">
            <h4>{board.title}</h4>
           </div>
           <div className="col-md-2 favorite" onClick={board.handleFavorite}>
            <span>{isFavorite(board.favorite)}</span>
           </div>                    
         </div>                
       </div>            
    </div>
  </div>
)

export default Board
