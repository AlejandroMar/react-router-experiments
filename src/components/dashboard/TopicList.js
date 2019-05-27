import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function TopicList({ match, loading, topicArr, error }) {
  if (error) {
    return (
      <div className="container">
        <h4>{error}</h4>
      </div>
    );
  }
  return (
    <div className="col-4">
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
    </div>
  );
}

export default withRouter(TopicList);
