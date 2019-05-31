import React, { Component } from "react";
import { connect } from "react-redux";

class DeviceList extends Component {
  state = {
    //Device list for current connection
    devices: this.props.devices
  };

  handleClick = e => {
    this.props.handleMethod(e);
  };

  render() {
    const deviceList = this.state.devices.map(device => {
      // let d  = new Date(0);
      // console.log(d)
      // let s = d.setUTCSeconds(device.createdTime).toString();
      // let date = s.toUTCString();
      // console.log(d)
      return (
        <div
          key={device.id.id}
          style={{
            display: "flex",
            paddingLeft: "10px",
            paddingTop: "10px",
            cursor: "pointer"
          }}
          className="device-list"
          onClick={() => {
            this.handleClick(device.id.id);
          }}
        >
          <div className="my-col bold">
            <p>{device.name}</p>
          </div>
          <div className="my-col ">
            <p>{device.createdAt}</p>
          </div>
          <div className="my-col ">
            <p>2000 Watts</p>
          </div>
          <div className="my-col ">
            <p>Monitor</p>
          </div>
        </div>
      );
    });

    return <div className="mydevice-list">{deviceList}</div>;
  }
}

const mapSateToProps = state => ({
  devices: state.userdata.data
});

export default connect(mapSateToProps)(DeviceList);
