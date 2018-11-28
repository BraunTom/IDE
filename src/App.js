import React, {Component} from 'react';
import './App.css';
import TheOneBuilder from "./Logic/Builder/TheOneBuilder";
import {connect} from "react-redux";
import {addBlock} from "./Logic/Redux/actions";
import BlockView from "./Components/BlockView";
import Point from "./Logic/Point";
import ConnectionView from "./Components/ConnectionView";

class App extends Component {
    constructor(props){
        super(props);
    }

    addBlock(x, y){
        this.props.addBlock(TheOneBuilder.buildBlock('Test'), new Point(x, y));
    }

    doubleClick(e){
        this.addBlock(e.pageX, e.pageY);
    }

    render() {
        return (
            <div className={'App'} onDoubleClick={this.doubleClick.bind(this)}>
                <svg className={'background'}>
                    {this.props.connectionViews}
                </svg>
                {this.props.blockViews}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        store: state,
        blocks: state.blocks,
        blockViews: state.blockViews,
        connectionViews: state.connectionViews
    }
}

function mapDispatchToProps(dispatch){
    return {
        addBlock: (block, position) => dispatch(addBlock(block, position))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);