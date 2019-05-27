import React, { Component } from 'react'

export default class AddressDetails extends Component {
    render() {
        return (
            <div className="address-details">
                <p>Street Address</p>
                <p>City <i class="fas fa-caret-down"></i></p>
                <p>State <i class="fas fa-caret-down"></i></p>
                <p>Pincode</p>
            </div>
        )
    }
}
