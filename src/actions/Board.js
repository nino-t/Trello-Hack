let nextId = 0
export const addNewBoard = (title, color, favorite) => {
  return {
    type: 'ADD_BOARD',
    id: nextId++,  
    title: title,
    favorite: favorite,
    color: color   
  }
}

export const toggleFavorite = id => {
  return {
    type: 'TOGGLE_FAVORITE',
    id
  }
}

export const boardClick = (id) => {
  return {
    type: 'BOARD_CLICKED',
    id
  }
}
