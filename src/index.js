import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { createStore  } from 'redux';
import registerServiceWorker from './registerServiceWorker';

import AppBoard from './reducers'

const initalState = {
  boards: [
    {
      id: 1,
      group_name: 'Tsuki Studio',
      title: 'Hello World',
      favorite: false,
      color: '#ffaf05'
    },
    {
      id: 2,
      group_name: 'Destine Digital',
      title: 'Destine Digital HQ',
      favorite: true,
      color: '#ddd'
    }
  ]
}

let store = createStore(AppBoard, initalState);

ReactDOM.render(<Routes store={store} />, document.getElementById('root'));
registerServiceWorker();
