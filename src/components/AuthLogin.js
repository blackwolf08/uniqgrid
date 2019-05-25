import React, { Component } from "react";
import Spinner from "../images/index";
import { connect } from "react-redux";
import logo from "../images/logo.png";

class AuthLogin extends Component {
  state = {
    isDisabled: true,
    email: "",
    password: "",
    isLoading: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      isLoading: true
    });
    this.setState({
      email: this.state.email.toLowerCase
    });
    const authType = "signin";
    this.props
      .onAuth(authType, this.state)
      .then(() => {
        this.setState({
          isLoading: false,
          email: "",
          password: ""
        });
        this.props.history.push("/dashboard");
      })
      .catch(() => {
        return;
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });

    if (this.state.email.length > 1 && this.state.password.length > 1) {
      this.setState({
        isDisabled: false
      });
    }
  };

  render() {
    if (this.state.isLoading) {
      if (this.props.error.length) {
        this.setState({
          isLoading: false,
          email: "",
          password: ""
        });
      }
      return <Spinner />;
    }

    return (
      <div className="flex h-w-100 auth-root">
        <div className="auth-container flex flex-col">
          <img src={logo} alt="uniqgrid" className="auth-logo" />
          <form onSubmit={this.handleSubmit} className="auth-form flex flex-col">
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
              className="auth-input"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
              className="auth-input"
            />
            <button className="auth-button">Login</button>
            <p className="auth-p">Forgot Password?</p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error.err
});

export default connect(mapStateToProps)(AuthLogin);
