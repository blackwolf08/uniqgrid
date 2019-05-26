import React, { Component } from "react";
import logo from "../images/logo.png";
import { logout } from '../actions/auth';
import { connect } from "react-redux";

class NavBar extends Component {
  state = {};

  logout = (e) => {
    e.preventDefault();
    this.props.logout();
    
  };
  render() {
    return (
      <div className="flex" style={style.root}>
        <div className="navbar-logo-div">
          <img src={logo} className="navbar-logo" alt="Uniqgrid" />
        </div>
        <div className="navbar-logout">
          <p onClick={this.logout}>Logout</p>
        </div>
      </div>
    );
  }
}

const style = {
  root: {
    height: "100px",
    width: "100%",
    backgroundColor: "#f1f1f1",
    position: "fixed",
    top: 0
  }
};

const mapStateToProps = state =>({
  isLoading: state.fetch.isLoading,
  currentUser: state.currentUser
})

export default connect(mapStateToProps, { logout })(NavBar);