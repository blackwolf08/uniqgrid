import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchConnetionInfo } from "../actions/fetchConnectionInfo";
import Spinner from "../images";
import csc from 'country-state-city';
import uuid from 'uuid'

class AddressDetails extends Component {
  state = {
    data: {},
    city: "-",
    postal: "-",
    state: "-",
    street: "-",
    isLoading: true,
    name: ""
  };

  componentDidMount() {
    this.setState({
      isLoading: true //here
    });
    this.setState({
      data: this.props.info
    });
    let name = "";
    Object.keys(this.state.data).forEach(key => {
      if (key.indexOf("connection") === 12) {
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
      if (key.indexOf("postal") === 0) {
        this.setState({
          postal: this.props.data[key].value.toString()
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
    if (this.state.isLoading) {
      return <Spinner />;
    }
    const listToRender = []
    const listOfStates = csc.getStatesOfCountry("101")
    //console.log(listOfStates)
    listOfStates.forEach(stateName=>{
      //console.log(stateName.name)
       listToRender.push(<option key={uuid.v4()}>{stateName.name}</option>)
    })


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
                onChange={e => {
                  this.handleChange(e);
                }}
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
                onChange={e => {
                  this.handleChange(e);
                }}
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
                onChange={e => {
                  this.handleChange(e);
                }}
                name="state"
              />{" "}
              {/* <select>
                {listToRender}
              </select> */}
            </div>
            <div className="address-details-div ">
              <p>Pincode</p>
              <input
                className="address-details-input "
                type="text"
                value={this.state.postal}
                placeholder={this.state.postal}
                onChange={e => {
                  this.handleChange(e);
                }}
                name="postal"
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
