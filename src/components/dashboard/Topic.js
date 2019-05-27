import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import TopicList from './TopicList';
import TopicDetails from './TopicDetails';

class Topic extends Component {
  state = {
    loading: false,
    topicArr: [],
    error: '',
  };

  async componentDidMount() {
    const { topic } = this.props.match.params;
    this.fetchData(topic);
  }

  async componentDidUpdate(prevState) {
    const { topic: oldTopic } = prevState.match.params;
    const { topic } = this.props.match.params;
    if (oldTopic !== topic) {
      this.fetchData(topic);
    }
  }

  fetchData = async topic => {
    try {
      await this.setState({ loading: true });
      const fetchList = await fetch(`https://swapi.co/api/${topic}`);
      const result = await fetchList.json();
      await this.setState({
        topicArr: result.results,
        loading: false,
        error: '',
      });
    } catch (error) {
      this.setState({ error: 'Not Found' });
    }
  };

  render() {
    const { match } = this.props;
    const { topicArr, loading, error } = this.state;
    return (
      <>
        <div className="row">
          <TopicList topicArr={topicArr} loading={loading} error={error} />
          {/* <Route path={`${match.path}/:hello`} component={TopicDetails} /> */}
          <Route
            path={`${match.path}/:details`}
            render={props => (
              <TopicDetails
                {...props}
                topicArr={topicArr}
                loading={loading}
                error={error}
              />
            )}
          />

          <Route
            exact
            path={`${match.path}`}
            render={() => (
              <div className="mt-3 text-center">
                <h5>Please click on a link to see details</h5>
              </div>
            )}
          />
        </div>
      </>
    );
  }
}

export default Topic;
