import React, { Component } from "react";

export default class SolarPvGenerator extends Component {
  render() {
    return (
      <div className="solar-pv-generator">
        <p>
          Adopted Solar{" "}
          <span className="solar-pv-generator-heading">Not Installed</span>
        </p>
        <div className="solar-pv-generator-box">
          <div className="solar-pv-generator-box-left">
            <p>Interested in getting Solar</p>
            <p>generator at this address?</p>
          </div>
          <div className="solar-pv-generator-box-right">
            <input type="checkbox" checked />
          </div>
        </div>
      </div>
    );
  }
}
