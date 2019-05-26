import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default class MyDevice extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>My Device</title>
        </Helmet>
        <p>Hello from my device section</p>
      </div>
    );
  }
}
