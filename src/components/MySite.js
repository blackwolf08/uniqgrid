import React, { Component } from "react";
import Connection from './Connection';

export default class MySite extends Component {
  state = {
    connections: [
      {
        id: 1,
        name: "Connection name 1",
        power: "100 kW",
        powerPer: "55%",
        consumption: "100 kW",
        consumptionPer: "100%"
      },
      {
        id: 2,
        name: "Connection name 2",
        power: "100 kW",
        powerPer: "55%",
        consumption: "100 kW",
        consumptionPer: "100%"
      },
      {
        id: 3,
        name: "Connection name 3",
        power: "100 kW",
        powerPer: "55%",
        consumption: "100 kW",
        consumptionPer: "100%"
      },
      {
        id: 4,
        name: "Connection name 4",
        power: "100 kW",
        powerPer: "55%",
        consumption: "100 kW",
        consumptionPer: "100%"
      },
      {
        id: 5,
        name: "Connection name 5",
        power: "100 kW",
        powerPer: "55%",
        consumption: "100 kW",
        consumptionPer: "100%"
      },
      {
        id: 6,
        name: "Connection name 6",
        power: "100 kW",
        powerPer: "55%",
        consumption: "100 kW",
        consumptionPer: "100%"
      },
      {
        id: 7,
        name: "Connection name 7",
        power: "100 kW",
        powerPer: "55%",
        consumption: "100 kW",
        consumptionPer: "100%"
      }
    ]
  };

  render() {
    const list = this.state.connections.map(connection => {
      return (
          <>
            <Connection id={connection.id} key={connection.id} name={connection.name} power={connection.power} powerPer={connection.powerPer} consumption={connection.consumption} consumptionPer={connection.consumptionPer}  />
          </>
      )
    });

    return (
      <div className="mysites-root">
        <h1 className="mysites-heading">My Sites</h1>
        <div className="mysites-connection-list">
            {list}
        </div>
      </div>
    );
  }
}
