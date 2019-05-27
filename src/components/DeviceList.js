import React, { Component } from 'react'

export default class DeviceList extends Component {

    state = {
        //Device list for current connection
        devices: [
            {
                name: "Device 1",
                added: "Added on 24/5/2019",
                power: "2000 Watts",
                action: "Monitor"
            },
            {
                name: "Device 1",
                added: "Added on 24/5/2019",
                power: "2000 Watts",
                action: "Monitor"
            },
            {
                name: "Device 1",
                added: "Added on 24/5/2019",
                power: "2000 Watts",
                action: "Monitor"
            },
            {
                name: "Device 1",
                added: "Added on 24/5/2019",
                power: "2000 Watts",
                action: "Monitor"
            },
        ]
    }

    render() {

        const { name } = this.props;
        const deviceList = this.state.devices.map(device => {
            return (
                <div style={{ display:'flex'}}>
                <div className="my-col bold">
                <p>{device.name}</p>
                </div>
                <div className="my-col ">
                <p>{device.added}</p>
                </div>
                <div className="my-col ">
                <p>{device.power}</p>
                </div>
                <div className="my-col ">
                <p>{device.action}</p>
                </div>
                </div>
            )
        });

    


        return (
            <div className="mydevice-list">
                <h4>Connection name {name}</h4>
                {deviceList}
            </div>
        )
    }
}
