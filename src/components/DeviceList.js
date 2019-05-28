import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'

class DeviceList extends Component {

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
        console.log(this.props.devices)
        const deviceList = this.state.devices.map(device => {
            return (
                <div key={uuid.v4()} style={{ display:'flex'}}>
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

const mapSateToProps = state => ({
    devices: state.userdata.data
})

export default connect(mapSateToProps)(DeviceList);