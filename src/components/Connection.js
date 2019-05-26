import React, { Component } from "react";

export default class Connection extends Component {
  render() {
    const {
      name,
      power,
      powerPer,
      consumption,
      consumptionPer
    } = this.props;
    return (
      <div className="mysites-connections">
        <div className="col-4">
          <p>{name}</p>
        </div>
        <div className="col-4">
          <p>
            {power} <span style={{ color: "green" }}>({powerPer})</span>
          </p>
        </div>
        <div className="col-4">
          <p>
            {consumption}{" "}
            <span style={{ color: "red" }}>({consumptionPer})</span>
          </p>
        </div>
        <div className="col-4 mysites-icons">
          <p>Icons</p>
        </div>
      </div>
    );
  }
}
