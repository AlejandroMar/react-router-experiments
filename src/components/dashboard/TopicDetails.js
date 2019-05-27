import React from 'react';

function TopicDetails({ match, topicArr, loading }) {
  let filterDetails = [{ title: 'loading' }];
  if (topicArr.length > 0) {
    filterDetails = topicArr.filter(topic => {
      if (topic.title) {
        return topic.episode_id === Number(match.params.details);
      }
      if (topic.name) {
        return topic.name === match.params.details;
      }
    });
  }

  filterDetails =
    filterDetails.length > 0 ? filterDetails : [{ title: 'Not found' }];

  return filterDetails[0].title ? (
    <div> {filterDetails[0].title}</div>
  ) : (
    <div> {filterDetails[0].name}</div>
  );
}

export default TopicDetails;
