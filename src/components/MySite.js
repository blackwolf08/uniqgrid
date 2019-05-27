import React, { Component } from "react";
import Connection from "./Connection";
import { Helmet } from "react-helmet";
import uuid from "uuid";

export default class MySite extends Component {
  state = {
    connections: [
      {
        _id_: uuid.v4(),
        name: "Connection name 1",
        power: "100 kW",
        powerPer: "55%",
        consumption: "100 kW",
        consumptionPer: "100%"
      },
      {
        _id_: uuid.v4(),
        name: "Connection name 2",
        power: "100 kW",
        powerPer: "55%",
        consumption: "100 kW",
        consumptionPer: "100%"
      },
      {
        _id_: uuid.v4(),
        name: "Connection name 3",
        power: "100 kW",
        powerPer: "55%",
        consumption: "100 kW",
        consumptionPer: "100%"
      },
      {
        _id_: uuid.v4(),
        name: "Connection name 4",
        power: "100 kW",
        powerPer: "55%",
        consumption: "100 kW",
        consumptionPer: "100%"
      },
      {
        _id_: uuid.v4(),
        name: "Connection name 5",
        power: "100 kW",
        powerPer: "55%",
        consumption: "100 kW",
        consumptionPer: "100%"
      },
      {
        _id_: uuid.v4(),
        name: "Connection name 6",
        power: "100 kW",
        powerPer: "55%",
        consumption: "100 kW",
        consumptionPer: "100%"
      },
      {
        _id_: uuid.v4(),
        name: "Connection name 7",
        power: "100 kW",
        powerPer: "55%",
        consumption: "100 kW",
        consumptionPer: "100%"
      }
    ]
  };

  render() {
    document.title = "My Site";
    const list = this.state.connections.map(connection => {
      return (
        <Connection
          key={connection._id_}
          id={connection._id_}
          name={connection.name}
          power={connection.power}
          powerPer={connection.powerPer}
          consumption={connection.consumption}
          consumptionPer={connection.consumptionPer}
        />
      );
    });

    return (
      <div className="mysites-root">
        <Helmet>
          <title>My Site</title>
        </Helmet>
        <h1 className="mysites-heading">My Sites</h1>
        <div className="mysites-connection-list">{list}</div>
      </div>
    );
  }
}
