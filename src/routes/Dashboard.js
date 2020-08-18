import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
import Events from './Events';

class DashboardRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.authentication.loggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardRoutes);
