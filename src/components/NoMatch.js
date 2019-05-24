import React from 'react';

function NoMatch({ location }) {
  return (
    <div className="container">
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default NoMatch;
