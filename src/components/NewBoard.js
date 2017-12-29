import React from 'react';

const NewBoard = (props) => (
  <div className="col-md-3" onClick={props.handleModal}>
    <div className="board">
      <div className="board-title">
         <div className="row">
           <div className="col-md-12">
            <center style={{ marginTop: '40px' }}>
              <h4>New Board</h4>
            </center>            
           </div>
         </div>                
       </div>            
    </div>
  </div>
)

export default NewBoard
