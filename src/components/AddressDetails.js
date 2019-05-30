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
    isLoading: true
  };

  componentWillMount() {
    this.setState({
      isLoading: true
    });
    let url = window.location.href;
    url.split("/");
    this.props.fetchConnetionInfo(url[url.length - 1]).then(res => {
      if (res) {
        this.setState({
          data: this.props.info
        });
        console.log(this.state.data);
        Object.keys(this.state.data).forEach(key => {
          if (key.indexOf("city") === 0) {
            console.log(key, key.indexOf("city"));
            this.setState({
              city: this.state.data[key].value.toString()
            });
          }
          if (key.indexOf("street") === 0) {
            this.setState({
              street: this.state.data[key].value.toString()
            });
          }
          if (key.indexOf("state") === 0) {
            this.setState({
              state: this.state.data[key].value.toString()
            });
          }
          if (key.indexOf("pincode") === 0) {
            this.setState({
              state: this.state.data[key].value.toString()
            });
          }
        });
        this.setState({
          isLoading: false
        });
      }
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
            <p>
              Street Address -{" "}
              <input
                type="text"
                value={this.state.street}
                placeholder={this.state.street}
                onChange={this.handleChange}
                name="street"
              />{" "}
            </p>
            <p>
              City - {this.state.city} <i className="fas fa-caret-down" />
            </p>
            <p>
              State - {this.state.state}
              <i className="fas fa-caret-down" />
            </p>
            <p>Pincode - {this.state.pincode}</p>
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
