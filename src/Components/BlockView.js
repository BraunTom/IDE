import React, { Component } from 'react';
import '../ComponentStyles/BlockView.css';
import Header from "./Header";
import Point from "../Logic/Point";
import PortContainer from "./PortContainer";

class BlockView extends Component {
    get position(){
        return this.state.position;
    }

    updatePosition(dx, dy){
        this.setState({
            position: this.state.position.add(dx, dy)
        });
    }

    setPosition(x, y){
        this.props.viewModel.position = new Point(x, y);
    }

    dragStart(x, y){
        this.updatePosition(x, y);
    }

    drag(position){
        this.setPosition(...position);
    }

    render() {
        this.props.viewModel.bind(this);
        return (
            <div style={this.state.position.asCssPosition()} className="BlockView">
                <Header parentPosition={this.position}
                        dragStart={this.dragStart.bind(this)}
                        drag={this.drag.bind(this)}
                        title={this.props.viewModel.name}/>
                <PortContainer ports={this.props.viewModel.flowConnections}/>
                <PortContainer ports={this.props.viewModel.dataConnections}/>
            </div>
        );
    }
}

export default BlockView;