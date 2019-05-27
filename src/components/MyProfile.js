import React, { Component } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

export default class MyProfile extends Component {
  componentDidMount() {
    const jwt = localStorage.jwtToken;
    console.log(jwt);
    const URL = "http://portal.uniqgridcloud.com:8080/api/customers";

    axios.get(URL).then(e => {
      console.log(e);
    });
  }

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
