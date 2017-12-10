import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
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
                        <li className="active"><a href="#">Boards</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
