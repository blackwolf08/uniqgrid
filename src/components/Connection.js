import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Connection extends Component {
  handleClick = () => {};

  render() {
    const {
      id,
      name,
      power,
      powerPer,
      consumption,
      consumptionPer
    } = this.props;

    const redirect = `/dashboard/my-sites/${id}`;
    return (
      <Link to={redirect}>
        <div className="mysites-connections" onClick={this.handleClick}>
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
          <div
            className="col-4 mysites-icons"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <i className="far fa-chart-bar" /> <i className="fas fa-cog" />
          </div>
        </div>
      </Link>
    );
  }
}
