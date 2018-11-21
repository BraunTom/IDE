import React, {Component} from 'react';
import './App.css';
import TheOneBuilder from "./Logic/Builder/TheOneBuilder";
import {connect} from "react-redux";
import {addBlock} from "./Logic/Redux/actions";
import BlockView from "./Components/BlockView";
import Point from "./Logic/Point";

class App extends Component {

    doubleClick(e){
        this.props.addBlock(TheOneBuilder.buildBlock('Test'), new Point(e.pageX, e.pageY));
    }

    render() {
        return (
            <div className={'App'} onDoubleClick={this.doubleClick.bind(this)}>
                <svg className={'background'}/>
                {this.props.blockViewModels.map(model => <BlockView viewModel={model}/>)}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        store: state,
        blocks: state.blocks,
        blockViewModels: state.blockViewModels
    }
}

function mapDispatchToProps(dispatch){
    return {
        addBlock: (block, position) => dispatch(addBlock(block, position))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);