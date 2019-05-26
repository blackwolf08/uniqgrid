import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class Connection extends Component {

  handleClick = ()=>{

  }

  render() {
    const {
      key,
      id,
      name,
      power,
      powerPer,
      consumption,
      consumptionPer
    } = this.props;

    console.log(key)

    const redirect = `/dashboard/my-sites/${id}`;
    return (
      <Link to={redirect} >
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
        <div className="col-4 mysites-icons" style={{display:'flex', justifyContent:'space-around'}}>
          <i class="far fa-chart-bar"></i> <i class="fas fa-cog"></i>
        </div>
      </div>
      </Link>
    );
  }
}
