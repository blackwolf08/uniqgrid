import React, { Component } from "react";
import NavBar from "./NavBar";
import LeftPart from "./LeftPart";
import { Route, Switch } from "react-router-dom";
import MySite from "./MySite";
import MyDevice from "./MyDevice";
import MyRequests from "./MyRequests";
import MyProfile from "./MyProfile";
import FeedBack from "./FeedBack";
import ConnectionInfo from "./ConnectionInfo";
import { fetchUserData } from '../actions/userData'
import { connect } from 'react-redux'
import Spinner from '../images/index'

class Dashboard extends Component {



  render() {

    if(this.props.isLoading)
    {
      this.props.fetchUserData()
      return (
        <div>
        <NavBar />
        <LeftPart />
        <div className="view">
          <Spinner />
        </div>
      </div>
      )
    }


    return (
      <div>
        <NavBar />
        <LeftPart />
        <div className="view">
          <Switch>
            <Route path="/dashboard/my-sites" exact component={MySite} />
            <Route path="/dashboard/my-device" component={MyDevice} />
            <Route path="/dashboard/my-requests" component={MyRequests} />
            <Route path="/dashboard/feedback" component={FeedBack} />
            <Route path="/dashboard/my-profile" component={MyProfile} />
            <Route
              path="/dashboard/my-sites/:id"
              
              component={ConnectionInfo}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.userdata.isLoading
})

export default connect(mapStateToProps, { fetchUserData })(Dashboard);
