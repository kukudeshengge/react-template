import React, { Component } from 'react';
import './index.scss';
import RouteView from '@/router/router_view';

export default class index extends Component {
    render() {
        console.log(this.props)
        return (
            <div className='resource_main'>
                <div className="resource_header">
                    header
                </div>
                <div className="resource_container">
                    <RouteView routers={this.props.routers} />
                </div>
                <div className="resource_footer">
                    footer
                </div>
            </div>
        )
    }
}
