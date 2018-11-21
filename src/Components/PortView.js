import React, { Component } from 'react';
import '../ComponentStyles/PortView.css'
import {addConnection, setDragStart} from "../Logic/Redux/actions";
import {connect} from "react-redux";

class PortView extends Component{
    dragOver(e){
        if(this.props.dragStart !== this && this.props.dragStart.props.viewModel.wantsDrop(this.props.viewModel)){
            e.preventDefault();
        }
    }

    dragStart(e){
        console.log('start');
        e.dataTransfer.effectAllowed = 'move';
        this.props.setDragStart(this);
    }

    static drop(e){
        console.log('drop');
        this.props.addConnection(this.props.dragStart.props.viewModel, this.props.viewModel);
    }

    render(){
        this.props.viewModel.bind(this);
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
