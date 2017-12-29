const boards = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOARD':         
      return [
        ...state,
        {
          id: action.id,
          title: action.title,          
          color: action.color,
          favorite: action.favorite
        }
      ]

    case 'TOGGLE_FAVORITE':
      var item = []           
      state.map((board, index) => {
        if (board.id !== action.id) {
          item.push(board)
        }else{
          var data
          data = state[index];
          data.favorite = !board.favorite
          item.push(data)
        }
      })
      return item      

    default:
      return state
  }
}

export default boards;
