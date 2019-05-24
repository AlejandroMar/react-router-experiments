import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import About from './components/About';
import Topics from './components/Topics';
import Login from './components/Login';
import LandingPage from './components/Landing';
import NavBar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Register from './components/Register';

// https://github.com/pillarjs/path-to-regexp/tree/v1.7.0
// they use this library to parse the urls

function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <hr />

        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
