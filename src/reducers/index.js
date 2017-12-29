import { combineReducers } from 'redux';

import boards from './Board';
import modal from './Modal';

const AppBoard  = combineReducers({
  boards,
  modal
})

export default AppBoard;
