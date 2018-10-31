import React, { Component } from 'react';
import '../ComponentStyles/PortView.css'

export default class PortView extends Component{
    render(){
        return (
            <div
                className={'port'}
                draggable={true}
                id={this.props.id}
                style={this.props.style}/>
        );
    }
}