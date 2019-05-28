import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function TopicList({ match, loading, topicArr, error }) {
  if (error) {
    return (
      <>
        <h4>{error}</h4>
      </>
    );
  }
  return (
    <ul className="list-group">
      {loading ? (
        <h4>loading...</h4>
      ) : (
        topicArr &&
        topicArr.map((topic, index) =>
          topic.title ? (
            <li key={index} className="list-group-item">
              <Link
                className="nav-link"
                to={`${match.url}/${topic.episode_id}`}
              >
                {topic.title}
              </Link>
            </li>
          ) : (
            <li key={index} className="list-group-item">
              <Link className="nav-link" to={`${match.url}/${topic.name}`}>
                {topic.name}
              </Link>
            </li>
          )
        )
      )}
    </ul>
  );
}

export default withRouter(TopicList);
