import React, { Component } from "react";
import { Helmet } from "react-helmet";
import DeviceList from './DeviceList'

export default class MyDevice extends Component {

  state = {
    connections: [
      1
      //JSON response from uniqgrid server
    ]
  }


  render() {

    const listOfConnections = this.state.connections.map(connection => {
      return <DeviceList name={connection} />
    })

    return (
      <div>
        <Helmet>
          <title>My Device</title>
        </Helmet>
        <div className="mydevice-hero">
        <h1 style={{marginBottom:'20px'}} className="mysite-heading">My Devices</h1>
          {listOfConnections}
        </div>
      </div>
    );
  }
}
