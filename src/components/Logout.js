import React from 'react';
import { Redirect } from 'react-router-dom';
import auth from './helpers/auth';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.props.logout();
  }

  render = () => <Redirect to="/login" />;
}

export default Logout;
