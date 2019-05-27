import React, { Component } from 'react'

export default class InstalledDevices extends Component {
    render() {
        return (
            <div className="installed-devices">
                <button className="installed-device-buttons">gridx-0005 <i className="fas fa-times" style={{color:'grey'}}></i></button>
                <button className="installed-device-buttons">nodex-0005 <i className="fas fa-times" style={{color:'grey'}}></i></button>
                <button className="installed-device-buttons">nodex-0006 <i className="fas fa-times" style={{color:'grey'}}></i></button>
            </div>
        )
    }
}
