import React, { Component } from 'react';

class Register extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="UserName">
              User Name
              <input
                type="text"
                className="form-control"
                id="UserName"
                placeholder="User Name"
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email address
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </label>
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="password1">
              Password
              <input
                type="password"
                className="form-control"
                id="password1"
                placeholder="Password"
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="password2">
              Password
              <input
                type="password"
                className="form-control"
                id="password2"
                placeholder="Retype password"
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

export default Register;
