import React, { Component } from "react";
import Connection from "./Connection";
import { Helmet } from "react-helmet";
import axios from "axios";

export default class MySite extends Component {
  state = {
    maxConnections: 0
  };

  componentWillMount() {
    const URL =
      "https://cors-anywhere.herokuapp.com/https://api.hubapi.com/contacts/v1/contact/email/demo@uniqgrid.com/profile?hapikey=bdcec428-e806-47ec-b7fd-ece8b03a870b";

    axios.get(URL).then(res => {
      console.log(res);
      const properties = res.data.properties;
      let arrayOfStrings = [];
      let noOfSites = [];
      Object.keys(properties).forEach(key => {
        arrayOfStrings.push(key);
      });

      arrayOfStrings.forEach(site => {
        let nanCheck = isNaN(parseInt(site.charAt(site.length - 2), 10));
        if (site.search("site") && !nanCheck) {
          noOfSites.push(parseInt(site.charAt(site.length - 2), 10));
        }
      });
      noOfSites.sort();
      this.setState({
        maxConnections: noOfSites[noOfSites.length - 1]
      });
    });
  }

  render() {
    let list = [];
    for (let i = 1; i <= this.state.maxConnections; i++) {
      list.push(
        <Connection
          key={i}
          id={i}
          name={`Site ${i}`}
          power={`100 kW`}
          powerPer={`55%`}
          consumption={`100 kW`}
          consumptionPer={`100%`}
        />
      );
    }

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
