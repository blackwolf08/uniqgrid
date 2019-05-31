import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchConnetionInfo } from "../actions/fetchConnectionInfo";
import Spinner from "../images";

class AddressDetails extends Component {
  state = {
    data: {},
    city: "-",
    pincode: "-",
    state: "-",
    street: "-",
    isLoading: true,
    name: ""
  };

  componentWillReceiveProps() {
    //console.log("im mounted");
    this.setState({
      isLoading: true
    });
    this.setState({
      data: this.props.info
    });
    let name = "";
    Object.keys(this.state.data).forEach(key => {
      if (key.indexOf("connection") === 12) {
        //console.log(key.indexOf("connection"));
        name = this.state.data[key].value.toString();
      }
    });
    this.setState({
      name
    });
    Object.keys(this.props.data).forEach(key => {
      if (key.indexOf("city") === 0) {
        // if (this.props.data[key].value.toString() === this.state.city) {
        this.setState({
          city: this.props.data[key].value.toString()
        });
        // }
      }
      if (key.indexOf("street") === 0) {
        this.setState({
          street: this.props.data[key].value.toString()
        });
      }
      if (key.indexOf("state") === 0) {
        this.setState({
          state: this.props.data[key].value.toString()
        });
      }
      if (key.indexOf("pincode") === 0) {
        this.setState({
          state: this.props.data[key].value.toString()
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
    if (this.state.isLoading) {
      return <Spinner />;
    }

    return (
      <div className="address-details">
        {!this.state.isLoading && (
          <>
            <div className="address-details-div">
              <p>Street Address</p>
              <input
                className="address-details-input "
                type="text"
                value={this.state.street}
                placeholder={this.state.street}
                onChange={this.handleChange}
                name="street"
              />{" "}
            </div>
            <div className="address-details-div ">
              <p>City</p>
              <input
                className="address-details-input "
                type="text"
                value={this.state.city}
                placeholder={this.state.city}
                onChange={this.handleChange}
                name="city"
              />{" "}
            </div>
            <div className="address-details-div ">
              <p>State</p>
              <input
                className="address-details-input "
                type="text"
                value={this.state.state}
                placeholder={this.state.state}
                onChange={this.handleChange}
                name="state"
              />{" "}
            </div>
            <div className="address-details-div ">
              <p>Pincode</p>
              <input
                className="address-details-input "
                type="text"
                value={this.state.pincode}
                placeholder={this.state.pincode}
                onChange={this.handleChange}
                name="pincode"
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

export default connect(
  mapStateToProps,
  { fetchConnetionInfo }
)(AddressDetails);
