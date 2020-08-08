import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/Home';
import Login from './components/Login';
import DashboardLayout from './components/DashboardLayout';

function App(props) {
  const { loggedIn } = props;
  return (
    <Router>
      <Switch>
        <Route path="/login">
          {!!loggedIn ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/react">
          <Home />
        </Route>
        <Route path="/">
          {!loggedIn ? <Redirect to="/login" /> : <DashboardLayout />}
        </Route>
      </Switch>
    </Router>
  );
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    loggedIn: state.authentication.loggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
