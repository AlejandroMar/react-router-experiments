import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NoMatch from './NoMatch';

const comp = () => (
  <>
    <h2>About: </h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptate
      velit nisi est dolorum deserunt ut, exercitationem quo voluptas! Inventore
      possimus quam pariatur totam assumenda ullam error ea consectetur nisi.
    </p>
  </>
);

export default function About({ match }) {
  return (
    <div className="container">
      <Switch>
        <Route path={`${match.url}`} component={comp} exact />
        <Route path={`${match.url}/:any`} component={NoMatch} />
      </Switch>
    </div>
  );
}
