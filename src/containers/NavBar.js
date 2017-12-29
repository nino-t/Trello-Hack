import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
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
)

export default Navbar;
