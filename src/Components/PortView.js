import React, { Component } from 'react';
import '../ComponentStyles/PortView.css'

export default class PortView extends Component{
    constructor(props){
        super(props);
        this.props.viewModel.bind(this);
    }

    dragOver(e){
        console.log(this.props.viewModel.position);
        console.log(e.target);
    }

    dragStart(e){
        console.log(this.props.viewModel.position);
        e.dataTransfer.effectAllowed = 'move';
    }

    render(){
        return (
            <div
                className={'port'}
                draggable={true}
                id={this.props.id}
                style={this.props.style}
                onDragOver={this.dragOver.bind(this)}/>
        );
    }
}