import React, {Component} from 'react';
import './App.css';
import TheOneBuilder from "./Logic/Builder/TheOneBuilder";
import {connect} from "react-redux";
import {addBlock} from "./Logic/Redux/actions";
import Point from "./Logic/Point";
import FunctionFinder from "./Tools/ToolComponents/FunctionFinder";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {functionFinder: null}
    }

    addBlock(x, y){
        this.props.addBlock(TheOneBuilder.buildBlock('Test'), new Point(x, y));
    }

    doubleClick(e){
        this.spawnFunctionFinderAt(e.pageX, e.pageY);
    }

    removeFunctionFinder(){
        this.setState({
            functionFinder: null
        });
    }

    spawnFunctionFinderAt(x, y){
        this.setState({
            functionFinder: <FunctionFinder
                                remove={this.removeFunctionFinder.bind(this)}
                                initialPosition={new Point(x, y)}/>
        });
    }

    render() {
        return (
            <div className={'App'} onDoubleClick={this.doubleClick.bind(this)}>
                <svg className={'background'}>
                    {this.props.connectionViews}
                </svg>
                {this.props.blockViews}
                {this.state.functionFinder ? this.state.functionFinder : []}
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