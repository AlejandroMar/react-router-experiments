import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Topic from './Topic';

class Topics extends React.Component {
  state = {};

  componentDidMount() {
    console.log('hello');
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${match.url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>

        <Route path={`${match.path}/:topic`} component={Topic} />
        <Route exact path={`${match.path}`} render={() => <h3>click on any link</h3>} />

      </div>
    );
  }
}

export default Topics;
