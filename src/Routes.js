import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import App from './App';
import About from './components/About/About';

const Routes =  () => (
      <Router>
        <div>
         <nav className="navbar navbar-default" role="navigation">
            <div className="container">
                
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Trello Hack</a>
                </div>

                
                <div className="collapse navbar-collapse navbar-ex1-collapse">
                    <ul className="nav navbar-nav">                        
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </div>
        </nav>

        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
      </div>
   </Router>
)

export default Routes;
