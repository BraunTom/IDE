import React, { Component } from 'react';
import '../ComponentStyles/BlockView.css';
import Header from "./Header";
import Point from "../Logic/Point";
import PortContainer from "./PortContainer";

class BlockView extends Component {
    constructor(props){
        super(props);

        this.flowConnections = <PortContainer ports={this.props.block.flowConnections}/>;
        this.dataConnections = <PortContainer ports={this.props.block.dataConnections}/>;

        this.state = {position: new Point(0, 0)};
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
            <div style={this.position.asCssPosition()} className="BlockView">
                <Header parentPosition={this.state.position}
                        dragStart={this.dragStart.bind(this)}
                        drag={this.drag.bind(this)}
                        title={this.props.block.name}/>
                {this.flowConnections}
                {this.dataConnections}
            </div>
        );
    }
}

export default BlockView;