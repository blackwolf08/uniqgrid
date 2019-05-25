import React, { Component } from 'react'
import logo from '../images/logo.png'

export default class NavBar extends Component {
    render() {
        return (
            <div className="flex" style={style.root}>
                <div className="navbar-logo-div">
                    <img src={logo} className="navbar-logo" alt="Uniqgrid" />
                </div>
                <div className="navbar-logout">
                    <p>
                        Logout
                    </p>
                </div>
            </div>
        )
    }
}

const style = {
    root: {
        height: "100px",
        width: '100%',
        backgroundColor: "#f1f1f1",
        position: 'fixed',
        top: 0
    }
}
