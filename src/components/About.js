import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NoMatch from './NoMatch';

export default function About() {
  return (
    <div className="container">
      <h2>About: </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptate
        velit nisi est dolorum deserunt ut, exercitationem quo voluptas!
        Inventore possimus quam pariatur totam assumenda ullam error ea
        consectetur nisi.
      </p>
    </div>
  );
}
