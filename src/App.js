import React, {Component} from 'react';
import './App.css';
import BlockView from "./Components/BlockView";
import TheOneBuilder from "./Logic/Builder/TheOneBuilder";
import ConnectionView from "./Components/ConnectionView";

class App extends Component {
    doubleClick(e){
        this.props.addBlock(TheOneBuilder.buildBlock('Test'));
    }

    render() {
        return (
            <div className={'App'} onDoubleClick={this.doubleClick.bind(this)}>
                <svg className={'background'}>
                    {this.props.connections.map((connection, index) =>
                        <ConnectionView key={index} connection={connection}/>)}
                </svg>
                {this.props.blocks.map((block, index) =>
                    <BlockView key={index} block={block}/>)}
            </div>
        );
    }
}

export default App;
