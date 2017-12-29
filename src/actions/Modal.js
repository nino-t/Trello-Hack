export const toggleModal = (open) => {
  return {
    type: 'TOGGLE_MODAL',
    openModal: !open      
  }
}
