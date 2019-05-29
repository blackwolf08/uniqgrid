import React, { Component } from 'react'
import { connect } from 'react-redux'

class DeviceList extends Component {

    state = {
        //Device list for current connection
        devices: this.props.devices
    }

    render() {
        console.log(this.props.devices)
        
        const { name } = this.props;
        console.log(this.props.devices)
        const deviceList = this.state.devices.map(device => {
            return (
                <div key={device.id.id} style={{ display:'flex', border:'1px solid grey'}}>
                <div className="my-col bold">
                <p>{device.name}</p>
                </div>
                <div className="my-col ">
                <p>{device.createdTime}</p>
                </div>
                <div className="my-col ">
                <p>2000 Watts</p>
                </div>
                <div className="my-col ">
                <p>Monitor</p>
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