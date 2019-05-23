import React from 'react';

function Topic({ match }) {
  // the path includes the parameters as varibles with the :parameter
  // the url is what you see in the navigation bar
  console.log(match.path);
  console.log(match.url);
  return (
    <div>
      <h3>{match.params.topic}</h3>
    </div>
  );
}

export default Topic;
