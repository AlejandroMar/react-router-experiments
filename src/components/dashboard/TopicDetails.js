import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import RevealDetailsComponents from './RevealDetailsComponents';

class TopicDetails extends React.Component {
  state = {
    details: {},
  };

  componentDidMount() {
    console.log('mounting TopicDetails');
    const { topicArr } = this.props;
    this.filterArray(topicArr);
  }

  componentDidUpdate(prevProps) {
    const { topicArr: oldTopicArr } = prevProps;
    const { topicArr } = this.props;
    const { details: oldDetails } = prevProps.match.params;
    const { details } = this.props.match.params;
    if (oldDetails !== details) {
      const { topicArr } = this.props;
      console.log('update Topic detail');
      this.filterArray(topicArr);
    }
    if (oldTopicArr !== topicArr) {
      const { topicArr } = this.props;
      console.log('update Topic detail');
      this.filterArray(topicArr);
    }
  }

  componentWillUnmount() {
    console.log('Unmounting TopicDetails');
  }

  filterArray = topicArr => {
    const { match } = this.props;
    // const { details } = this.state;
    if (topicArr.length === 0) {
      this.setState({ details: { msg: 'Loading...' } });
    } else {
      const filteredDetails = topicArr.filter(topic => {
        if (topic.title) {
          return topic.episode_id === Number(match.params.details);
        }
        return topic.name === match.params.details;
      });
      if (filteredDetails.length > 0) {
        this.setState({ details: filteredDetails[0] });
      } else {
        this.setState({ details: { msg: 'Not Found' } });
      }
    }
  };

  render() {
    const ComptoRender = (() => {
      const { match } = this.props;
      const { details } = this.state;
      if (match.params.topic in RevealDetailsComponents && !details.msg) {
        return RevealDetailsComponents[match.params.topic](details);
      }
      return null;
    })();

    const { details } = this.state;
    const { error } = this.props;
    return (
      <>
        {error ? (
          <h5>Not found</h5>
        ) : (
          <>{ComptoRender || <h5>{details.msg}</h5>}</>
        )}
      </>
    );
  }
}

export default TopicDetails;
