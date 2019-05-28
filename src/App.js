import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.scss';
import About from './components/About';
import Login from './components/Login';
import LandingPage from './components/Landing';
import NavBar from './components/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Register from './components/Register';
import NoMatch from './components/NoMatch';

// https://github.com/pillarjs/path-to-regexp/tree/v1.7.0
// they use this library to parse the urls

function App({ location }) {
  return (
    <div>
      <NavBar />

      <hr />
      {/*
        Oh, rollback to using location.key as a key breaks nested routes like /articles/nested because on every route change the top component will be re-animated which is not desired. This has to be solved somehow
        */}

      <TransitionGroup>
        <CSSTransition
          key={location.pathname.split('/')[1] || '/'}
          classNames="fade"
          timeout={300}
          appear
          exit={false}
        >
          {/* Switch component is rendering the wrong component on exit because the current location is changed while the element is not removed from DOM yet. The solution is to pass location prop into Switch in order to render the correct component during the whole lifecycle. */}
          <Switch location={location}>
            {/* we put the exact prop to avoid nesting 404 */}
            <Route exact path="/" component={LandingPage} />
            <Route path="/dashboard" component={Dashboard} exit />
            <Route exact path="/about" component={About} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route component={NoMatch} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default withRouter(App);
