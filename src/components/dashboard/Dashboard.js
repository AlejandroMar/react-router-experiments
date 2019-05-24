import React from 'react';
import { Route } from 'react-router-dom';
import Topics from './Topics';
import Topic from './Topic';

function Dashboard({ match }) {
  return (
    <div className="container">
      <h1 className="h2 text-center">Dashboard</h1>

      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <Topics />
          </div>
        </nav>

        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div
            className="d-flex 
                         justify-content-between 
                         flex-wrap flex-md-nowrap 
                         align-items-center 
                         pt-3 pb-2 mb-3"
          />

          <Route path={`${match.path}/:topic`} component={Topic} />
          <Route
            exact
            path={`${match.path}`}
            render={() => <h3>Click on any link on the topics list</h3>}
          />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
