import { connect } from 'react-redux';

import { toggleModal } from '../actions/Modal';
import { boardClick, addNewBoard, toggleFavorite  } from '../actions/Board';
import BoardList from '../components/BoardList.js';

const mapStateToProps = state => {
  return {
    boards: state.boards,
    openModal: state.modal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onBoardClick: id => {
      dispatch(boardClick(id))      
    },
    handleModal: open => {
      dispatch(toggleModal(open))
    },
    handleNewBoard: (title, color, favorite) => {
      dispatch(addNewBoard(title, color, favorite))
      dispatch(toggleModal(true))
    },
    handleFavorite: id => {
      dispatch(toggleFavorite(id))
    }
  }
}

const VisibleBoardsList = connect(
  mapStateToProps,
  mapDispatchToProps  
)(BoardList)

export default VisibleBoardsList
