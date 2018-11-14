import React, {Component} from 'react';
import './App.css';
import TheOneBuilder from "./Logic/Builder/TheOneBuilder";
import {connect} from "react-redux";
import {addBlock} from "./Logic/Redux/actions";
import BlockView from "./Components/BlockView";

class App extends Component {

    doubleClick(e){
        this.props.blocks.addBlock(TheOneBuilder.buildBlock('Test'))
    }

    render() {      // why do I need the map in line 28
        return (
            <div className={'App'} onDoubleClick={this.doubleClick.bind(this)}>
                <svg className={'background'}/>
                {this.props.store.blocks.map(block => <BlockView block={block}/>)}
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