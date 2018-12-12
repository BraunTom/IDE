import React, {Component} from 'react'
import {InterpreterConsumer} from "../../Contexts/InterpreterContext";
import '../ToolStyles/FunctionFinderStyle.css';
import Header from "../../Components/Header";
import Point from "../../Logic/Point";
import {addBlock} from "../../Logic/Redux/actions";
import connect from "react-redux/es/connect/connect";
import TheOneBuilder from "../../Logic/Builder/TheOneBuilder";
import BlockStore from "../../Logic/Builder/BlockStore";

class FunctionFinder extends Component{
    constructor(props){
        super(props);
        this.state = {position: this.props.initialPosition};
    }

    get position(){
        return this.state.position;
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

    onclick(block){
        return () => {
            this.props.addBlock(block, this.position);
            this.props.remove();
        }
    }

    render(){
        return (
            <div className={'FunctionFinder'} style={this.position.asCssPosition()}>
                <Header parentPosition={this.position}
                        dragStart={this.dragStart.bind(this)}
                        drag={this.drag.bind(this)}
                        title={'FunctionFinder'}/>
                <ul>
                    {BlockStore.blocks.map((block, index) =>
                        <li key={index} onClick={this.onclick(block).bind(this)}>{block.name} </li>)}
                </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(FunctionFinder)