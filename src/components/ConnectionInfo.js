import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Switch, Route, Link } from "react-router-dom";
import AddressDetails from "./AddressDetails";
import ConnectionDetails from "./ConnectionDetails";
import LocalGeneration from "./LocalGeneration";
import SolarPvGenerator from "./SolarPvGenerator";
import InstalledDevices from "./InstalledDevices";
import { fetchConnetionInfo } from "../actions/fetchConnectionInfo";
import { connect } from "react-redux";

class ConnectionInfo extends Component {
  state = {
    id: 0,
    tab1: " connection-info-border",
    tab2: "",
    tab3: "",
    tab4: "",
    tab5: "",
    data: {}
  };

  componentDidMount() {
    let url = window.location.href;
    url.split("/");

    if (url.includes("connection-details")) {
      this.setState({
        tab2: " connection-info-border",
        tab1: ""
      });
    } else if (url.includes("local-generation")) {
      this.setState({
        tab3: " connection-info-border",
        tab1: ""
      });
    } else if (url.includes("solar-pv-generator")) {
      this.setState({
        tab4: " connection-info-border",
        tab1: ""
      });
    } else if (url.includes("installed-devices")) {
      this.setState({
        tab5: " connection-info-border",
        tab1: ""
      });
    } else {
      this.setState({
        tab1: " connection-info-border"
      });
    }

    const {
      match: { params }
    } = this.props;
    const id = params.id;
    this.setState({
      id
    });
    this.props.fetchConnetionInfo(id).then(res => {
      if (res) {
        this.setState({
          data: this.props.info
        });
      }
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
              <Link to={`/dashboard/my-sites/${this.state.id}/address-details`}>
                <p onClick={this.handleAdd} className="connection-info-p">
                  Address Details
                </p>
              </Link>
            </div>
            <div className={"mycol-5" + this.state.tab2}>
              <Link
                onClick={this.handleConn}
                to={`/dashboard/my-sites/${this.state.id}/connection-details`}
              >
                <p className="connection-info-p">Connection Details</p>
              </Link>
            </div>
            <div className={"mycol-5" + this.state.tab3}>
              <Link
                to={`/dashboard/my-sites/${this.state.id}/local-generation`}
              >
                <p className="connection-info-p">Local Generation</p>
              </Link>
            </div>
            <div className={"mycol-5" + this.state.tab4}>
              <Link
                to={`/dashboard/my-sites/${this.state.id}/solar-pv-generator`}
              >
                <p className="connection-info-p">Solar PV Generator</p>
              </Link>
            </div>
            <div className={"mycol-5" + this.state.tab5}>
              <Link
                to={`/dashboard/my-sites/${this.state.id}/installed-devices`}
              >
                <p className="connection-info-p">Installed Devices</p>
              </Link>
            </div>
          </div>
          <Switch>
            <Route
              exact
              path={`/dashboard/my-sites/${this.state.id}/address-details`}
              render={props => (
                <AddressDetails {...props} data={this.state.data} />
              )}
              key="installed-devices"
            />
            <Route
              key="installed-devices"
              path="/dashboard/my-sites/:id/connection-details"
              render={props => (
                <ConnectionDetails data={this.state.data} {...props} />
              )}
            />
            <Route
              key="installed-devices"
              path="/dashboard/my-sites/:id/local-generation"
              render={props => (
                <LocalGeneration data={this.state.data} {...props} />
              )}
            />
            <Route
              key="installed-devices"
              path="/dashboard/my-sites/:id/solar-pv-generator"
              render={props => (
                <SolarPvGenerator data={this.state.data} {...props} />
              )}
            />
            <Route
              key="installed-devices"
              path="/dashboard/my-sites/:id/installed-devices"
              render={props => (
                <InstalledDevices data={this.state.data} {...props} />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  info: state.connectionInfo.data
});

export default connect(
  mapStateToProps,
  { fetchConnetionInfo }
)(ConnectionInfo);
