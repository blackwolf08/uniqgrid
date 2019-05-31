import React, { Component } from "react";

export default class SolarPvGenerator extends Component {
  state = {
    adoptedSolarSite: "-",
    interested: true
  };

  componentWillReceiveProps() {
    this.setState({
      isLoading: true
    });

    Object.keys(this.props.data).forEach(key => {
      if (key.indexOf("adopted") === 0) {
        this.setState({
          adoptedSolarSite: this.props.data[key].value.toString()
        });
      }
      if (key.indexOf("not") > -1) {
        this.setState({
          interested: true
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
    this.props.update();
  };

  render() {
    return (
      <div className="solar-pv-generator">
        <p>
          Adopted Solar{" "}
          <span className="solar-pv-generator-heading">
            {this.state.adoptedSolarSite}
          </span>
        </p>
        <div className="solar-pv-generator-box">
          <div className="solar-pv-generator-box-left">
            <p>Interested in getting Solar</p>
            <p>generator at this address?</p>
          </div>
          <div className="solar-pv-generator-box-right">
            <label className="my-container">
              <input type="checkbox" checked={this.state.interested} />
              <span className="my-checkmark" />
            </label>
          </div>
        </div>
      </div>
    );
  }
}
