import React, { Component } from "react";
import { connect } from "react-redux";

class ConnectionDetails extends Component {
  state = {
    electricity_connection_name: "-",
    connected_load_kw: "-",
    segment: "",
    sub_segment: "",
    average_monthly_energy_cost: "",
    electricity_quality: ""
  };

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    Object.keys(this.props.data).forEach(key => {
      if (key.indexOf("connected") === 0) {
        this.setState({
          connected_load_kw: this.props.data[key].value.toString()
        });
      }
      if (key.indexOf("connection") === 12) {
        this.setState({
          electricity_connection_name: this.props.data[key].value.toString()
        });
      }
      if (key.indexOf("segment") === 0) {
        this.setState({
          segment: this.props.data[key].value.toString()
        });
      }
      if (key.indexOf("sub") === 0) {
        this.setState({
          sub_segment: this.props.data[key].value.toString()
        });
      }
      if (key.indexOf("average") === 0) {
        this.setState({
          average_monthly_energy_cost: this.props.data[key].value.toString()
        });
      }
      if (key.indexOf("quality") === 12) {
        this.setState({
          electricity_quality: this.props.data[key].value.toString()
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
    this.props.handleChildrenChange({
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
                value={this.state.electricity_connection_name}
                placeholder={this.state.electricity_connection_name}
                onChange={this.handleChange}
                name="electricity_connection_name"
              />{" "}
            </div>
            <div className="address-details-div ">
              <p>Connected Load</p>
              <input
                className="address-details-input "
                type="text"
                value={this.state.connected_load_kw}
                placeholder={this.state.connected_load_kw}
                onChange={this.handleChange}
                name="connected_load_kw"
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
                value={this.state.sub_segment}
                placeholder={this.state.sub_segment}
                onChange={this.handleChange}
                name="sub_segment"
              />{" "}
            </div>
            <div className="address-details-div ">
              <p>Average Monthly Cost</p>
              <input
                className="address-details-input "
                type="text"
                value={this.state.average_monthly_energy_cost}
                placeholder={this.state.average_monthly_energy_cost}
                onChange={this.handleChange}
                name="average_monthly_energy_cost"
              />{" "}
            </div>
            <div className="address-details-div ">
              <p>Electricity Quality</p>
              <input
                className="address-details-input "
                type="text"
                value={this.state.electricity_quality}
                placeholder={this.state.electricity_quality}
                onChange={this.handleChange}
                name="electricity_quality"
              />{" "}
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  info: state.connectionInfo.data
});

export default connect(mapStateToProps)(ConnectionDetails);
