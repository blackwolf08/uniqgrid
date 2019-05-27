import React, { Component } from "react";
import Spinner from "../images/index";
import { connect } from "react-redux";
import logo from "../images/logo.png";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'

class AuthLogin extends Component {
  state = {
    isDisabled: true,
    email: "",
    password: "",
    isLoading: false
  };

  validateEmail() {
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailToVerify = this.state.email;
    let result = regex.test(String(emailToVerify).toLowerCase());
    if (!result) {
      this.setState({
        emailNotValid: true
      });
    } else {
      this.setState({
        emailNotValid: false
      });
    }
  }

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
          password: "",
          emailNotValid: false
        });
        this.props.history.push("/dashboard/my-sites");
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

    this.validateEmail();
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
        <Helmet>
          <title>Uniqgrid | Login</title>
        </Helmet>
        <div className="auth-container flex flex-col">
          <img src={logo} alt="uniqgrid" className="auth-logo" />
          <form
            onSubmit={this.handleSubmit}
            className="auth-form flex flex-col"
          >
            <span style={{ color: "red" }}>
              {this.state.emailNotValid && <>Please enter a valid email</>}
            </span>
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
            <button className="auth-button" disabled={this.state.isDisabled}>Login</button>
            <Link to="/login" className="auth-p">Forgot Password?</Link>
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
