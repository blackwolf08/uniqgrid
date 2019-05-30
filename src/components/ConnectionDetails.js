import React, { Component } from "react";

export default class ConnectionDetails extends Component {
  state = {
    connectionName: "-",
    connectedLoad: "-",
    segment: "",
    subSegment: "",
    avgMonthCost: "",
    elecQuality: ""
  };

  componentWillReceiveProps() {
    this.setState({
      isLoading: true
    });

    Object.keys(this.props.data).forEach(key => {
      if (key.indexOf("connected") === 0) {
        this.setState({
          connectedLoad: this.props.data[key].value.toString()
        });
      }
      if (key.indexOf("connection") === 12) {
        this.setState({
          connectionName: this.props.data[key].value.toString()
        });
      }
      if (key.indexOf("segment") === 0) {
        this.setState({
          segment: this.props.data[key].value.toString()
        });
      }
      if (key.indexOf("sub") === 0) {
        this.setState({
          subSegment: this.props.data[key].value.toString()
        });
      }
      if (key.indexOf("average") === 0) {
        this.setState({
          avgMonthCost: this.props.data[key].value.toString()
        });
      }
      if (key.indexOf("quality") === 12) {
        this.setState({
          elecQuality: this.props.data[key].value.toString()
        });
      }
    });
    this.setState({
      isLoading: false
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="address-details">
        {!this.state.isLoading && (
          <>
            <div className="address-details-div">
              <p>Connection Name</p>
              <input
                className="address-details-input "
                type="text"
                value={this.state.connectionName}
                placeholder={this.state.connectionName}
                onChange={this.handleChange}
                name="connectionName"
              />{" "}
            </div>
            <div className="address-details-div ">
              <p>Connected Load</p>
              <input
                className="address-details-input "
                type="text"
                value={this.state.connectedLoad}
                placeholder={this.state.connectedLoad}
                onChange={this.handleChange}
                name="connectedLoad"
              />{" "}
            </div>
            <div className="address-details-div ">
              <p>Segment</p>
              <input
                className="address-details-input "
                type="text"
                value={this.state.segment}
                placeholder={this.state.segment}
                onChange={this.handleChange}
                name="segment"
              />{" "}
            </div>
            <div className="address-details-div ">
              <p>Sub Segment</p>
              <input
                className="address-details-input "
                type="text"
                value={this.state.subSegment}
                placeholder={this.state.subSegment}
                onChange={this.handleChange}
                name="subSegment"
              />{" "}
            </div>
            <div className="address-details-div ">
              <p>Average Monthly Cost</p>
              <input
                className="address-details-input "
                type="text"
                value={this.state.avgMonthCost}
                placeholder={this.state.avgMonthCost}
                onChange={this.handleChange}
                name="avgMonthCost"
              />{" "}
            </div>
            <div className="address-details-div ">
              <p>Electricity Quality</p>
              <input
                className="address-details-input "
                type="text"
                value={this.state.elecQuality}
                placeholder={this.state.elecQuality}
                onChange={this.handleChange}
                name="elecQuality"
              />{" "}
            </div>
          </>
        )}
      </div>
    );
  }
}
