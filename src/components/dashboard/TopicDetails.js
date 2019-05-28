import React, { useState, useEffect } from 'react';

import revealDetailsComponents from './helpers/revealDetailsComponents';

function TopicDetails({ match, topicArr, error }) {
  const [details, setDetails] = useState({});

  const filterArray = topicArr => {
    if (topicArr.length === 0) {
      setDetails({ msg: 'Loading...' });
    } else {
      const filteredDetails = topicArr.filter(topic => {
        if (topic.title) {
          return topic.episode_id === Number(match.params.details);
        }
        return topic.name === match.params.details;
      });
      if (filteredDetails.length > 0) {
        setDetails(filteredDetails[0]);
      } else {
        setDetails({ msg: 'Not Found' });
      }
    }
  };

  useEffect(() => {
    filterArray(topicArr);
  });

  const toRender = (() => {
    if (match.params.topic in revealDetailsComponents && !details.msg) {
      return revealDetailsComponents[match.params.topic](details);
    }
    return null;
  })();

  return (
    <>
      {error ? <h5>Not found</h5> : <>{toRender || <h5>{details.msg}</h5>}</>}
    </>
  );
}

export default TopicDetails;
