import React, {Component} from 'react';
import './App.css';
import BlockView from "./Components/BlockView";
import TheOneBuilder from "./Logic/Builder/TheOneBuilder";
import ConnectionView from "./Components/ConnectionView";

const block = TheOneBuilder.buildBlock('Hello');

class App extends Component {
    render() {
        return (
            <div className={'App'}>
                <svg className={'background'}/>
                <BlockView block={block}/>
            </div>

        );
    }
}

export default App;
