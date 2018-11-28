import React, { Component } from 'react';
import '../ComponentStyles/PortView.css'
import {addConnection, setDragStart} from "../Logic/Redux/actions";
import {connect} from "react-redux";

class PortView extends Component{
    dragOver(e){
        if(this.props.dragStart !== this && this.props.dragStart.port.matches(this.port)){
            e.preventDefault();
        }
    }

    get port(){
        return this.props.port;
    }

    dragStart(e){
        e.dataTransfer.effectAllowed = 'move';
        this.props.setDragStart(this);
    }

    static drop(e){
        this.props.addConnection(this.props.dragStart, this);
    }

    render(){
        return (
            <div
                className={'port'}
                draggable={true}
                id={this.props.id}
                ref={ref => this.ref = ref}
                style={this.props.style}
                onDragStart={this.dragStart.bind(this)}
                onDragOver={this.dragOver.bind(this)}
                onDrop={PortView.drop.bind(this)}/>
        );
    }
}

function mapStateToProps(state){
    return {
        dragStart: state.dragStart
    }
}

function mapDispatchToProps(dispatch){
    return {
        setDragStart: start => dispatch(setDragStart(start)),
        addConnection: (start, end) => dispatch(addConnection(start, end))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortView);
