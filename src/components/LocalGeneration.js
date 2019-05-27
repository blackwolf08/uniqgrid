import React, { Component } from 'react'

export default class LocalGeneration extends Component {
    render() {
        return (
            <div className="local-generation">
                <p>Diesel Genset operational? <i className="fas fa-caret-down"></i></p>
                <p>Number of Diesel Genset(s)</p>
                <p>Total kVA Capacity of Diesel Genset(s)</p>
                <p>Monthly running cost of Diesel Genset(s)</p>
            </div>
        )
    }
}
