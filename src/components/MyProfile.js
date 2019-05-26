import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default class MyProfile extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>My Profile</title>
        </Helmet>
        <p>Hello From My Profile</p>
      </div>
    );
  }
}
