import React, { Component } from 'react'
import NavBar from './NavBar'
import LeftPart from './LeftPart'
import {Route, Switch} from 'react-router-dom'
import MySite from './MySite'
import MyDevice from './MyDevice'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <LeftPart />
                <div className="view">
                <Switch>
                    <Route path="/dashboard/my-site" component={MySite} />
                    <Route path="/dashboard/my-device" component={MyDevice} />
                </Switch>
                </div>
            </div>
        )
    }
}
