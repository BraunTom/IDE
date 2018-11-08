import React, {Component} from 'react';
import './App.css';
import BlockView from "./Components/BlockView";
import TheOneBuilder from "./Logic/Builder/TheOneBuilder";
import {connect} from "react-redux";
import {addBlock} from "./Redux/action";

class App extends Component {
    constructor(props){
        super(props);
    }

    doubleClick(e){
        this.props.addBlock(TheOneBuilder.buildBlock('Test'));
    }

    render() {
        console.log(this.props.store);
        return (
            <div className={'App'} onDoubleClick={this.doubleClick.bind(this)}>
                <svg className={'background'}/>
                {this.props.blocks.map(block => <BlockView block={block}/>)}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        store: state,
        blocks: state.blocks
    }
}

function mapDispatchToProps(dispatch){
    return {
        addBlock: block => dispatch(addBlock(block))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
