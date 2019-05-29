import React, { Component } from "react";
import { Helmet } from "react-helmet";
import DeviceList from "./DeviceList";
import uuid from "uuid";
import axios from "axios";
import { connect } from "react-redux";
import Spinner from "../images";
import CanvasJSReact from "../lib/canvasjs.react";

class MyDevice extends Component {
  state = {
    connections: [
      1
      //JSON response from uniqgrid server
    ],
    deviceId: "",
    isLoading: false,
    keys: [],
    selectValue: "Select Keys",
    graphData: ""
  };

  handleClick = deviceId => {
    this.setState({
      deviceId,
      isLoading: true
    });
    const URL = `http://localhost:1337/portal.uniqgridcloud.com:8080/api/device/${deviceId}`;
    axios.get(URL).then(res => {
      axios
        .get(
          `http://localhost:1337/portal.uniqgridcloud.com:8080/api/plugins/telemetry/DEVICE/${deviceId}/keys/timeseries`
        )
        .then(res => {
          this.setState({
            keys: res.data,
            isLoading: false
          });
        });
    });
  };
  handleChange = e => {
    this.setState({
      isLoading: true
    });
    this.setState({ selectValue: e.target.value });
    setTimeout(() => {
      let endtime = Date.now();
      console.log(endtime);
      axios
        .get(
          `http://localhost:1337/portal.uniqgridcloud.com:8080/api/plugins/telemetry/DEVICE/${
            this.state.deviceId
          }/values/timeseries?limit=100&agg=NONE&keys=${
            this.state.selectValue
          }&startTs=1554396240000&endTs=${endtime}`
        )
        .then(res => {
          console.log(res.data);
          let a = res.data;
          let s = a[Object.keys(a)[0]];
          console.log(s);
          this.setState({
            isLoading: false,
            graphData: s
          });
        });
    }, 0);
  };

  setOptions = () => {
    let s = this.dataPoints();
    const options = {
      title: {
        text: `${this.state.selectValue} Analysis`
      },
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2",
      data: [
        {
          type: "area",
          dataPoints: [...s]
        }
      ]
    };

    return options;
  };

  dataPoints = () => {
    let s = this.state.graphData.map(e => {
      let date  = (new Date(e.ts)).toUTCString().split(" ");
      return {
        label: date[0]+date[1]+date[2]+date[3],
        y: e.value * 1
      };
    });
    console.log(s);
    return s;
  };

  render() {
    let CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const listOfConnections = this.state.connections.map(connection => {
      return (
        <DeviceList
          handleMethod={this.handleClick}
          key={uuid.v4()}
          name={connection}
        />
      );
    });

    const listOfKeys = this.state.keys.map(key => {
      return (
        <>
          <option value={key}>{key}</option>
        </>
      );
    });

    return (
      <div>
        <Helmet>
          <title>My Device</title>
        </Helmet>
        <div className="mydevice-hero">
          <h1 style={{ marginBottom: "20px" }} className="mysite-heading">
            My Devices
          </h1>
          {listOfConnections}
          <div className="my-device-graph">
            {this.state.deviceId && !this.state.isLoading && (
              <div>
                <select
                  value={this.state.selectValue}
                  onChange={this.handleChange}
                  className="key-select"
                >
                  {listOfKeys}
                </select>
                {/* <p>{this.state.graphData}</p> */}
                <div>
                {this.state.graphData && this.state.graphData.length === 0 && (
                    <h4>No Data</h4>
                  )}
                  {this.state.graphData && this.state.graphData.length > 1 && (
                    <CanvasJSChart
                      options={this.setOptions()}
                      /* onRef = {ref => this.chart = ref} */
                    />
                  )}
                </div>
              </div>
            )}
            {this.state.isLoading && <Spinner />}
          </div>
        </div>
      </div>
    );
  }
}

const mapSateToProps = state => ({
  devices: state.userdata.data
});

export default connect(mapSateToProps)(MyDevice);
