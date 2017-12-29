import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import NavBar from './containers/NavBar'
import VisibleBoardList from './containers/VisibleBoardList'
import About from './containers/About'

const Routes = ({ store }) => (
    <Provider store={store}>
      <Router>     
        <div>
          <NavBar />
          <Route exact path="/" component={VisibleBoardList} />
          <Route path="/about" component={About} />        
        </div>
      </Router>
    </Provider>
)

Routes.propTypes = {
  store: PropTypes.object.isRequired
}

export default Routes;
