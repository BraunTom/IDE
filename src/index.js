import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore} from "redux";
import TheOneBuilder from "./Logic/Builder/TheOneBuilder";
import {addBlock} from "./Logic/Redux/actions";
import {initialState} from "./Logic/Redux/reducers";
import blockStore from "./Logic/Redux/reducers";
import {InterpreterProvider} from "./Contexts/InterpreterContext";
// import interpreter from 'InterpreterNan'

const store = createStore(blockStore, initialState);

store.dispatch(addBlock(TheOneBuilder.buildBlock('Hello')));

console.log(require('os'));

render(
    <Provider store={store}>
        <InterpreterProvider value={5}>
            <App />
        </InterpreterProvider>
    </Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
