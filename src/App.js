import React, {Component} from 'react';
import './App.css';
import BlockView from "./Components/BlockView";
import TheOneBuilder from "./Logic/Builder/TheOneBuilder";

import Point from "./Logic/Point";
import {createStore} from "redux";
import todoApp from "./Redux/reducers";
import {addTodo, setVisibilityFilter, toggleTodo, VisibilityFilters} from "./Redux/action";

const store = createStore(todoApp);

console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// Stop listening to state updates
unsubscribe();
console.log(store.getState());



const block = TheOneBuilder.buildBlock('Hello');

class App extends Component {
    constructor(props){
        super(props);
        this.state = {blocks: [<BlockView block={block}/>]}
    }

    doubleClick(e){
        this.setState({
            blocks: this.state.blocks.concat(<BlockView
                position={new Point(e.pageX, e.pageY)}
                block={TheOneBuilder.buildBlock('Test')}/>)
        })
    }

    render() {
        return (
            <div className={'App'} onDoubleClick={this.doubleClick.bind(this)}>
                <svg className={'background'}/>
                {this.state.blocks}
            </div>
        );
    }
}

export default App;
