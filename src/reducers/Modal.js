const modal = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':               
      state = action.openModal
      return state;      

    default:
      return state
  }
}

export default modal;
