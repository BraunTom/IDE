import React, { Component } from 'react';
import '../ComponentStyles/BlockView.css';
import Header from "./Header";
import Point from "../Logic/Point";
import PortContainer from "./PortContainer";
import {bringBlockToFront} from "../Logic/Redux/actions";
import connect from "react-redux/es/connect/connect";

class BlockView extends Component {
    constructor(props){
        super(props);

        this.dependents = [];

        this.flowConnections = <PortContainer view={this} ports={this.block.flowConnections}/>;
        this.dataConnections = <PortContainer view={this} ports={this.block.dataConnections}/>;
        this.state = {position: this.props.initialPosition};
    }

    get position(){
        return this.state.position;
    }

    get block(){
        return this.props.block;
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
        this.props.bringBlockToFront(this.block);
        this.updatePosition(x, y);
    }

    drag(position){
        this.setPosition(...position);
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        for (const dependent of this.dependents) {
            dependent.update();
        }
    }

    render() {
        return (
            <div style={this.position.asCssPosition()} className="BlockView">
                <Header parentPosition={this.position}
                        dragStart={this.dragStart.bind(this)}
                        drag={this.drag.bind(this)}
                        title={this.block.name}/>
                {this.flowConnections}
                {this.dataConnections}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {}
}

function mapDispatchToProps(dispatch){
    return {
        bringBlockToFront: block => bringBlockToFront(block)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlockView);