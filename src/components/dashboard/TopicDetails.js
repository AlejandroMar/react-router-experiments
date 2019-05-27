import React, { useState, useEffect } from 'react';

const comps = {
  films: filmDetail => (
    <div className="mt-4">
      <p>Title: {filmDetail.title}</p>
      <p>Director: {filmDetail.director}</p>
      <p>Opening: {filmDetail.opening_crawl}</p>
    </div>
  ),
  people: peopleDetail => (
    <div className="mt-4">
      <p>Name: {peopleDetail.name}</p>
      <p>Gender: {peopleDetail.gender}</p>
      <p>Height: {peopleDetail.height}</p>
    </div>
  ),
};

function TopicDetails({ match, topicArr, error }) {
  const [details, setDetails] = useState({});

  console.log(match);
  const filterArray = topicArr => {
    const filteredDetails = topicArr.filter(topic => {
      if (topic.title) {
        return topic.episode_id === Number(match.params.details);
      }
      return topic.name === match.params.details;
    });

    if (filteredDetails.length > 0) {
      setDetails(filteredDetails[0]);
    }
  };

  useEffect(() => {
    filterArray(topicArr);
  });

  const toRender = (() => {
    if (match.params.topic in comps) {
      return comps[match.params.topic](details);
    }
    return <h4>Not found</h4>;
  })();

  return <div className="col-8">{toRender}</div>;
}

export default TopicDetails;
