import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';

class MyProfile extends Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>My Profile</title>
        </Helmet>
        <p>Hello From My Profile</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data : state.userdata.data
})

export default connect(mapStateToProps)(MyProfile);