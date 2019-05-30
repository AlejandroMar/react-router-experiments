import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

import TopicList from './TopicList';
import TopicDetails from './TopicDetails';

class Topic extends Component {
  state = {
    loading: false,
    topicArr: [],
    error: '',
  };

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    const { topic } = this.props.match.params;
    this.fetchData(topic);
  }

  componentDidUpdate(prevState) {
    this._isMounted = true;
    const { topic: oldTopic } = prevState.match.params;
    const { topic } = this.props.match.params;
    if (oldTopic !== topic) {
      this.fetchData(topic);
    }
  }

  componentWillUnmount() {
    // console.log('Unmounting');
    this._isMounted = false;
  }

  fetchData = async topic => {
    try {
      await this.setState({ loading: true });
      const fetchList = await fetch(`https://swapi.co/api/${topic}`);
      const result = await fetchList.json();
      if (this._isMounted) {
        await this.setState({
          topicArr: result.results,
          loading: false,
          error: '',
        });
      }
    } catch (error) {
      this.setState({ error: 'Not Found' });
    }
  };

  render() {
    const { match, location } = this.props;
    const { topicArr, loading, error } = this.state;

    return (
      <>
        <div className="row">
          <div className="col-4">
            <TopicList topicArr={topicArr} loading={loading} error={error} />
          </div>
          {/* <Route path={`${match.path}/:hello`} component={TopicDetails} /> */}
          {/* transitionGroup wraps children in a div so I can put the col to the it */}
          {/* key={location.pathname.split('/')[3]} */}

          <div className="col-8">
            <TransitionGroup component={null}>
              <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={500}
                exit={false}
              >
                <Switch location={location}>
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
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
      </>
    );
  }
}

export default Topic;
