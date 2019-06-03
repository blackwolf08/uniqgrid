import React, { Component } from "react";
import { Helmet } from "react-helmet";
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
    data: {},
    name: "",
    update: false,
    defaultName: "Connection Name",
    active: 0
  };

  componentDidMount() {
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
        console.log(this.props.info);
        let name = "";
        Object.keys(this.state.data).forEach(key => {
          if (key.indexOf("connection") === 12) {
            name = this.state.data[key].value.toString();
          }
        });
        this.setState({
          name
        });
        this.setState({
          active: 1
        });
      }
    });
  }

  handleTabChange = tab => {
    if (tab === "connection-details") {
      this.setState({
        tab1: "",
        tab2: " connection-info-border",
        tab3: "",
        tab4: "",
        tab5: "",
        active: 2
      });
    } else if (tab === "address-details") {
      this.setState({
        tab1: " connection-info-border",
        tab2: "",
        tab3: "",
        tab4: "",
        tab5: "",
        active: 1
      });
    } else if (tab === "local-generation") {
      this.setState({
        tab1: "",
        tab2: "",
        tab3: " connection-info-border",
        tab4: "",
        tab5: "",
        active: 3
      });
    } else if (tab === "solar-pv-generator") {
      this.setState({
        tab1: "",
        tab2: "",
        tab3: "",
        tab4: " connection-info-border",
        tab5: "",
        active: 4
      });
    } else if (tab === "installed-devices") {
      this.setState({
        tab1: "",
        tab2: "",
        tab3: "",
        tab4: "",
        tab5: " connection-info-border",
        active: 5
      });
    }
  };

  handleUpdateButtonClick = value => {
    if (value === 1) {
      this.handleTabChange("connection-details");
    } else if (value === 2) {
      this.handleTabChange("local-generation");
    } else if (value === 3) {
      this.handleTabChange("solar-pv-generator");
    } else if (value === 4) {
      this.handleTabChange("installed-devices");
    } else if (value === 5) {
      // this.handleTabChange(1);
    }
  };

  render() {
    return (
      <div className="view">
        <Helmet>
          <title>{`${this.state.name || this.state.defaultName}`}</title>
        </Helmet>
        <h1 className="mysites-heading">
          {this.state.name || this.state.defaultName}
        </h1>
        <div className="connection-info-hero">
          <div className="connection-info-tabs" style={{ cursor: "pointer" }}>
            <div
              onClick={() => {
                this.handleTabChange("address-details");
              }}
              className={"mycol-5" + this.state.tab1}
            >
              <p className="connection-info-p">Address Details</p>
            </div>
            <div
              onClick={() => {
                this.handleTabChange("connection-details");
              }}
              className={"mycol-5" + this.state.tab2}
            >
              <p className="connection-info-p">Connection Details</p>
            </div>
            <div
              onClick={() => {
                this.handleTabChange("local-generation");
              }}
              className={"mycol-5" + this.state.tab3}
            >
              <p className="connection-info-p">Local Generation</p>
            </div>
            <div
              onClick={() => {
                this.handleTabChange("solar-pv-generator");
              }}
              className={"mycol-5" + this.state.tab4}
            >
              <p className="connection-info-p">Solar PV Generator</p>
            </div>
            <div
              onClick={() => {
                this.handleTabChange("installed-devices");
              }}
              className={"mycol-5" + this.state.tab5}
            >
              <p className="connection-info-p">Installed Devices</p>
            </div>
          </div>
          {this.state.active === 1 && (
            <>
              <AddressDetails update={this.update} data={this.props.info} />
              <button
                className="update-button"
                onClick={() => {
                  this.handleUpdateButtonClick(1);
                }}
              >
                Next
              </button>
            </>
          )}
          {this.state.active === 2 && (
            <>
              <ConnectionDetails update={this.update} data={this.props.info} />
              <button
                className="update-button"
                onClick={() => {
                  this.handleUpdateButtonClick(2);
                }}
              >
                Next
              </button>
            </>
          )}
          {this.state.active === 3 && (
            <>
              <LocalGeneration update={this.update} data={this.props.info} />
              <button
                className="update-button"
                onClick={() => {
                  this.handleUpdateButtonClick(3);
                }}
              >
                Next
              </button>
            </>
          )}
          {this.state.active === 4 && (
            <>
              <SolarPvGenerator update={this.update} data={this.props.info} />
              <button
                className="update-button"
                onClick={() => {
                  this.handleUpdateButtonClick(4);
                }}
              >
                Next
              </button>
            </>
          )}
          {this.state.active === 5 && (
            <>
              <InstalledDevices update={this.update} data={this.props.info} />
              <button
                className="update-button"
                onClick={() => {
                  this.handleUpdateButtonClick(5);
                }}
              >
                Update
              </button>
            </>
          )}
          {this.state.update && <button className="edit-button">Update</button>}
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
