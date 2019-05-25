import React, { Component } from 'react'
import NavBar from './NavBar'
import LeftPart from './LeftPart'
import {Route, Switch} from 'react-router-dom'
import MySite from './MySite'
import MyDevice from './MyDevice'
import MyRequests from './MyRequests'
import MyProfile from './MyProfile'
import FeedBack from './FeedBack'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <LeftPart />
                <div className="view">
                <Switch>
                    <Route path="/dashboard" exact component={MySite} />
                    <Route path="/dashboard/my-device" component={MyDevice} />
                    <Route path="/dashboard/my-requests" component={MyRequests} />
                    <Route path="/dashboard/feedback" component={FeedBack} />
                    <Route path="/dashboard/my-profile" component={MyProfile} />
                </Switch>
                </div>
            </div>
        )
    }
}
