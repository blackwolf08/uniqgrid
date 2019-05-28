import React, { Component } from 'react'

export default class ConnectionDetails extends Component {
    render() {
        return (
            <div className="connection-details">
                <p>Connection Name</p>
                <p>Connected Load (kW)</p>
                <p>Segment <i className="fas fa-caret-down"></i></p>
                <p>Sub-segment <i className="fas fa-caret-down"></i></p>
                <p>Average monthly enery cost</p>
                <p>Electricity Quality <i className="fas fa-caret-down"></i></p>
            </div>
        )
    }
}