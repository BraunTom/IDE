import React, { Component } from 'react';
import '../ComponentStyles/BlockView.css';
import Header from "./Header";
import Point from "../Logic/Point";
import FlowPortContainer from "./FlowPortContainer";

class BlockView extends Component {
    constructor(props){
        super(props);
        this.state = {position: new Point(0, 0)}
    }

    get position(){
        return this.state.position;
    }

    updatePosition(dx, dy){
        this.setState({
            position: this.state.position.add(dx, dy)
        });
    }

    setPosition(x, y){
        this.setState({
            position: new Point(x, y)
        });
    }

    dragStart(x, y){
        this.updatePosition(x, y);
    }

    drag(position){
        this.setPosition(...position);
    }

    render() {
        return (
            <div style={this.state.position.asCssPosition()} className="BlockView">
                <Header parentPosition={this.position}
                        dragStart={this.dragStart.bind(this)}
                        drag={this.drag.bind(this)}
                        title={this.props.block.name}/>
                <FlowPortContainer ports={this.props.block.flowConnections}/>
            </div>
        );
    }
}

export default BlockView;