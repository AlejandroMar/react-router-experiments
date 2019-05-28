import React from 'react';

function FilmDetails({ details }) {
  return (
    <div className="mt-4">
      <h3>Title:</h3>
      <p>{details.title}</p>
      <h4>Director:</h4>
      <p>{details.director}</p>
      <h5>Opening:</h5>
      <p>{details.opening_crawl}</p>
    </div>
  );
}

export default FilmDetails;
