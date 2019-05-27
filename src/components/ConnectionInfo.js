import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Switch, Route, Link } from "react-router-dom";
import AddressDetails from "./AddressDetails";
import ConnectionDetails from "./ConnectionDetails";
import LocalGeneration from "./LocalGeneration";
import SolarPvGenerator from "./SolarPvGenerator";
import InstalledDevices from "./InstalledDevices";

export default class ConnectionInfo extends Component {
  state = {
    id: 0,
    tab1: " connection-info-border",
    tab2: "",
    tab3: "",
    tab4: "",
    tab5: ""
  };

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    const id = params.id;
    this.setState({
      id
    });
  }

  render() {
    return (
      <div className="view">
        <Helmet>
          <title>{`Connection name ${this.state.id}`}</title>
        </Helmet>
        <h1 className="mysites-heading">Connection Name {this.state.id}</h1>
        <div className="connection-info-hero">
          <div className="connection-info-tabs" style={{ cursor: "pointer" }}>
            <div className={"mycol-5" + this.state.tab1}>
              <Link to={`/dashboard/my-sites/${this.state.id}`}>
                <p className="connection-info-p">Address Details</p>
              </Link>
            </div>
            <div className={"mycol-5" + this.state.tab2}>
              <Link to={`/dashboard/my-sites/${this.state.id}/connection-details`}>
                <p className="connection-info-p">Connection Details</p>
              </Link>
            </div>
            <div className={"mycol-5" + this.state.tab3}>
              <Link to={`/dashboard/my-sites/${this.state.id}/local-generation`}>
                <p className="connection-info-p">Local Generation</p>
              </Link>
            </div>
            <div className={"mycol-5" + this.state.tab4}>
              <Link to={`/dashboard/my-sites/${this.state.id}/solar-pv-generator`}>
                <p className="connection-info-p">Solar PV Generator</p>
              </Link>
            </div>
            <div className={"mycol-5" + this.state.tab5}>
              <Link to={`/dashboard/my-sites/${this.state.id}/installed-devices`}>
                <p className="connection-info-p">Installed Devices</p>
              </Link>
            </div>
          </div>
          <Switch>
            <Route
              exact
              path={`/dashboard/my-sites/${this.state.id}`}
              component={AddressDetails}
            />
            <Route
              path="/dashboard/my-sites/:id/connection-details"
              component={ConnectionDetails}
            />
            <Route
              path="/dashboard/my-sites/:id/local-generation"
              component={LocalGeneration}
            />
            <Route
              path="/dashboard/my-sites/:id/solar-pv-generator"
              component={SolarPvGenerator}
            />
            <Route
              path="/dashboard/my-sites/:id/installed-devices"
              component={InstalledDevices}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
