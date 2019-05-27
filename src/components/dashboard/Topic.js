import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Topic extends Component {
  state = {};
  // the path includes the parameters as varibles with the :parameter
  // the url is what you see in the navigation bar

  render() {
    const { match } = this.props;
    return (
      <div>
        <h3>{match.params.topic}</h3>
      </div>
    );
  }
}

export default withRouter(Topic);
