import React, { Component } from "react";

export default class LocalGeneration extends Component {
  state = {
    dieselGensetOp: "",
    noOfDieselGensets: "",
    totalCapGensets: "",
    monthlyRunningCost: ""
  };

  componentDidMount() {
    this.setState({
      isLoading: true
    });

    Object.keys(this.props.data).forEach(key => {
      if (key.indexOf("genset") === 7) {
        this.setState({
          dieselGensetOp: this.props.data[key].value.toString()
        });
      }
      if (key.indexOf("number") === 0) {
        this.setState({
          noOfDieselGensets: this.props.data[key].value.toString()
        });
      }
      if (key.indexOf("total") === 0) {
        this.setState({
          totalCapGensets: this.props.data[key].value.toString()
        });
      }
      if (key.indexOf("monthly") === 0) {
        this.setState({
          monthlyRunningCost: this.props.data[key].value.toString()
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
              <p>Diesel Genset Operational</p>
              <input
                className="address-details-input "
                type="text"
                value={this.state.dieselGensetOp}
                placeholder={this.state.dieselGensetOp}
                onChange={this.handleChange}
                name="dieselGensetOp"
              />{" "}
            </div>
            <div className="address-details-div ">
              <p>Number of Diesel Genset(s)?</p>
              <input
                className="address-details-input "
                type="text"
                value={this.state.noOfDieselGensets}
                placeholder={this.state.noOfDieselGensets}
                onChange={this.handleChange}
                name="noOfDieselGensets"
              />{" "}
            </div>
            <div className="address-details-div ">
              <p>Total kVA Capacity of Diesel Genset(s)</p>
              <input
                className="address-details-input "
                type="text"
                value={this.state.totalCapGensets}
                placeholder={this.state.totalCapGensets}
                onChange={this.handleChange}
                name="totalCapGensets"
              />{" "}
            </div>
            <div className="address-details-div ">
              <p>Monthly running cost of Diesel Genset(s)</p>
              <input
                className="address-details-input "
                type="text"
                value={this.state.monthlyRunningCost}
                placeholder={this.state.monthlyRunningCost}
                onChange={this.handleChange}
                name="monthlyRunningCost"
              />{" "}
            </div>
          </>
        )}
      </div>
    );
  }
}
