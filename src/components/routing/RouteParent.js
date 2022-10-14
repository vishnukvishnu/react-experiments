import React from "react";
import {
    Switch,
    Route,
  } from "react-router-dom";
import Login from './Login'
import LandingPage from './LandingPage'
import AppLayout from './AppLayout'
import ProtectedRoute from './ProtectedRoute'

function RouteParent() {
  return (
    <div>
      <h1>Protected Route</h1>
      <Login />
      <Switch>
        <Route exact path="/layout" component={AppLayout}></Route>
        <ProtectedRoute exact path="/landing" component={LandingPage}></ProtectedRoute>
      </Switch>
    </div>
  );
}

export default RouteParent;
