import React, { Component } from "react";
import Spinner from "../images/index";
import { connect } from "react-redux";

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

    return <div className="flex h-w-100" style={styles.root} />;
  }
}

const styles = {
  root: {},
  logo: {},
  button: {},

  link: {}
};

const mapStateToProps = state => ({
  error: state.error.err
});

export default connect(mapStateToProps)(AuthLogin);
