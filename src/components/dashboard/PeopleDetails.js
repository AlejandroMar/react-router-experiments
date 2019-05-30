import React, { Component } from 'react';

class PeopleDetails extends Component {
  state = {
    home: '...Loading',
  };

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    const { details } = this.props;

    this.fetchHomeWorld(details);
  }

  componentDidUpdate(prevProps) {
    this._isMounted = true;
    // console.log('Component updated');
    const { details } = this.props;
    if (prevProps.details.homeworld !== details.homeworld) {
      this.fetchHomeWorld(details);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  fetchHomeWorld = async details => {
    if (details.homeworld) {
      const fetchWorld = await fetch(`${details.homeworld}`);
      const worldData = await fetchWorld.json();
      if (this._isMounted) {
        this.setState({ home: worldData.name });
      }
    }
  };

  render() {
    const { details } = this.props;
    const { home } = this.state;
    return (
      <div className="mt-4">
        <h3>Name:</h3>
        <p>{details.name}</p>
        <h4>Gender:</h4>
        <p>{details.gender}</p>
        <h5>Homeworld:</h5>
        <p>{home}</p>
      </div>
    );
  }
}

export default PeopleDetails;
