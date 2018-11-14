import React, {Component} from 'react';
import './App.css';
import TheOneBuilder from "./Logic/Builder/TheOneBuilder";
import Store from "./Logic/Store/Store";


const store = new Store();

store.addBlock(TheOneBuilder.buildBlock('Hello world'));

class App extends Component {
    doubleClick(e){
        this.props.addBlock(TheOneBuilder.buildBlock('Test'));
    }

    render() {
        return (
            <div className={'App'} onDoubleClick={this.doubleClick.bind(this)}>
                <svg className={'background'}>

                </svg>
                {store.blockViews}
            </div>
        );
    }
}

export default App;
