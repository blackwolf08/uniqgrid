import React, { Component } from "react";

export default class ConnectionInfo extends Component {
  state = {
    id: 0
  };

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    const id = params.id;
    this.setState({
      id
    });
  }

  render() {

    let today = new Date();
    let date = today.getUTCDate();


    return (
      <div className="view hi">
          <p>Connection name {this.state.id} route (Work done, Sunday) {date} May</p>
      </div>
    );
  }
}
