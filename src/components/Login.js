import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import withAuth from "../hocs/withAuth";
import { connect } from "react-redux";
import { authUser } from "../actions/auth";
import AuthLogin from "./AuthLogin";
import Dashboard from "./Dashboard";

class Login extends Component {
  render() {
    const { authUser } = this.props;
    return (
      <Switch>
        <Route
          path="/login"
          render={props => <AuthLogin signin onAuth={authUser} {...props} />}
        />
        <Route 
          path="/dashboard"
          component={withAuth(Dashboard)}
        />
      </Switch>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { authUser }
  )(Login)
);
