import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default class MyRequests extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>My Requests</title>
        </Helmet>
        <p>Hello From my request</p>
      </div>
    );
  }
}
