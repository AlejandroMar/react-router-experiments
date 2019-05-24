import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <hr />
        <Switch>
          {/* we put the exact prop to avoid nesting 404 */}
          <Route exact path="/" component={LandingPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/about" component={About} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
