import React, {Component} from 'react';
import './App.css';
import TheOneBuilder from "./Logic/Builder/TheOneBuilder";
import {connect} from "react-redux";
import {addBlock} from "./Logic/Redux/actions";
import BlockView from "./Components/BlockView";
import Point from "./Logic/Point";
import ConnectionView from "./Components/ConnectionView";

class App extends Component {
    doubleClick(e){
        this.props.addBlock(TheOneBuilder.buildBlock('Test'), new Point(e.pageX, e.pageY));
    }

    render() {
        return (
            <div className={'App'} onDoubleClick={this.doubleClick.bind(this)}>
                <svg className={'background'}>
                    {this.props.connectionViewModels.map((model, index) =>
                        <ConnectionView key={index} viewModel={model}/>)}
                </svg>
                {this.props.blockViewModels.map((model, index) =>
                    <BlockView key={index} viewModel={model}/>)}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        store: state,
        blocks: state.blocks,
        blockViewModels: state.blockViewModels,
        connectionViewModels: state.connectionViewModels
    }
}

function mapDispatchToProps(dispatch){
    return {
        addBlock: (block, position) => dispatch(addBlock(block, position))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);