import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavLinks from './NavLinks';
import Topic from './Topic';
import OverView from './OverView';
import Archive from './Archive';
import Users from './Users';
import NoMatch from '../NoMatch';

function Dashboard({ match }) {
  return (
    <div className="container">
      <h1 className="h2 text-center m-0 p-3 bg-info">Dashboard</h1>

      <div className="row no-gutters">
        <nav className="col-2 bg-dark sidebar">
          <div className="sidebar-sticky">
            <NavLinks />
          </div>
        </nav>

        <main role="main" className="col-10">
          <Switch>
            <Route exact path={`${match.path}/:topic`} component={Topic} />

            <Route
              exact
              path={`${match.path}`}
              render={() => (
                <div className="mt-3 text-center">
                  <h3>Click on any link on the topics list</h3>
                </div>
              )}
            />
            <Route component={NoMatch} />
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
