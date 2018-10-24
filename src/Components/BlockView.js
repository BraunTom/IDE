import React, { Component } from 'react';
import '../ComponentStyles/BlockView.css';
import Header from "./Header";

class BlockView extends Component {
    constructor(props){
        super(props);
        this.state = {block: props.block};
    }

    render() {
        return (
            <div className="BlockView">
                <Header title={this.state.block.name}></Header>
            </div>
        );
    }
}

export default BlockView;