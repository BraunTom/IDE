import {render} from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {initialState} from "./Logic/Redux/reducers";
import blockStore from "./Logic/Redux/reducers";
import {InterpreterProvider} from "./Contexts/InterpreterContext";
import interpreter from 'InterpreterNan'
import BlockStore from "./Logic/Builder/BlockStore";

const store = createStore(blockStore, initialState);
BlockStore.importBlocks(interpreter.primitives());

render(
    <Provider store={store}>
        <InterpreterProvider value={interpreter}>
            <App />
        </InterpreterProvider>
    </Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
