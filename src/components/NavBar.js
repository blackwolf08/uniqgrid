import React, { Component } from "react";
import logo from "../images/logo.png";

export default class NavBar extends Component {
  state = {};

  logout = () => {
    localStorage.clear();
    window.location.href = "/login";
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
