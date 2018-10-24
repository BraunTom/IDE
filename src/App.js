import React, {Component} from 'react';
import './App.css';
import BlockView from "./Components/BlockView";
import TheOneBuilder from "./Logic/Builder/TheOneBuilder";

const block = TheOneBuilder.buildBlock('Hello');

class App extends Component {
    render() {
        return (
            <div>
                <div></div>
                <BlockView block={block}/>
            </div>
        );
    }
}

setTimeout(function(){console.log('hello'); block.name = 'World!'}, 1000);


export default App;
