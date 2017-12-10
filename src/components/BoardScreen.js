import React, { Component } from 'react';

import BoardGroup from './BoardGroup';

class BoardScreen extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { board_group } = this.props;
    return (
      <div>
          {
            board_group.map((group, index) => (
                <BoardGroup group={group} key={index} />
            ))
          }
      </div>
    );
  }
}

export default BoardScreen;
