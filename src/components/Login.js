import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import auth from './helpers/auth';

class Login extends Component {
  state = {};

  render() {
    const { loggedIn, location, login } = this.props;
    const { target } = location.state || {
      target: { pathname: '/dashboard' },
    };

    if (loggedIn) {
      return <Redirect to={target} />;
    }

    return (
      <div className="container">
        <form onSubmit={login}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">
              Email address
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </label>
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">
              Password
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
