import React from 'react';
import PropTypes from 'prop-types';

import ModalScreen from './ModalScreen';
import Board from './Board';
import NewBoard from './NewBoard';
import Input from './Input';

const BoardList = ({ 
    boards, onBoardClick, handleModal, openModal, handleNewBoard,
    handleFavorite
  }) => (  
  <div className="container"> 
    <div className="row">
      <button className="btn btn-primary col-md-12 text-center">
        MY BOARD SCHEDULE
      </button>
    </div>
    <br />
    <br />
    <div className="row">
      {    
        boards.map(board => (
          <Board 
            key={board.id} 
            {...board} 
            onClick={() => onBoardClick(board.id)}
            handleFavorite={() => handleFavorite(board.id)} />
        ))
      }
      <NewBoard handleModal={() => handleModal(openModal)} />
      <ModalScreen 
        title="New Board" 
        open={openModal} 
        handleModal={() => handleModal(openModal)}
        handleSubmit=
          {
            () => handleNewBoard(
              this.inputTitle.value,
              this.inputColor.value,
              this.inputFavorite.checked
            )        
          }>

         <Input
            type='text'
            name='title'
            id='title'
            value=''
            label='Title'
            inputRef={el => this.inputTitle = el}/>

         <Input
            type='color'
            name='color'
            id='color'
            value=''
            label='Background'
            inputRef={el => this.inputColor = el} />

        <div>
          <label for='favorite'>Favorite</label>
          <br />
          <input
            type='checkbox'
            name='favorite'
            id='favorite'
            ref={el => this.inputFavorite  = el}/>
            <b> Set as favorite board?</b>
          <br />
        </div>
      </ModalScreen>
    </div>   
  </div>
)

BoardList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      favorite: PropTypes.bool.isRequired,
      color: PropTypes.string.isRequired,
      group_name: PropTypes.string.isRequired
    }).isRequired,
  ).isRequired, 
  onBoardClick: PropTypes.func.isRequired,
  handleModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  handleNewBoard: PropTypes.func.isRequired,
  handleFavorite: PropTypes.func.isRequired
}

export default BoardList;
