import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LeftPart extends Component {
  render() {
    return (
      <div className="left-part flex flex-col">
        <div className="circle">
          <p>FL</p>
        </div>
        <button className="leftpart-menu">
          <Link  style={{width:'100%', height:'100%'}} className="link-p" to="/dashboard">
            My Site
          </Link>
        </button>
        <button className="leftpart-menu">
          <Link style={{width:'100%', height:'100%'}} className="link-p" to="/dashboard/my-device">
            My Device
          </Link>
        </button>
        <button className="leftpart-menu">
          <Link style={{width:'100%', height:'100%'}} className="link-p" to="/dashboard/my-requests">
            My Requests
          </Link>
        </button>
        <button className="leftpart-menu">
          <Link style={{width:'100%', height:'100%'}} className="link-p" to="/dashboard/feedback">
            FeedBack
          </Link>
        </button>
        <button className="leftpart-menu">
          <Link style={{width:'100%', height:'100%'}} className="link-p" to="/dashboard/my-profile">
            My Profile
          </Link>
        </button>
      </div>
    );
  }
}
