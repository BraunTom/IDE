import {ADD_BLOCK, ADD_CONNECTION, SET_VISIBILITY_FILTER, UPDATE_BLOCK_NAME, VisibilityFilters} from "./actions";
import {combineReducers} from "redux";
import ConnectionView from "../../Components/ConnectionView";
import React from "react";
const {SHOW_ALL} = VisibilityFilters;

export const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    blocks: [],
    blockViewModels: [],
    connections: [],
    connectionViewModels: []
};

function blocks(state = [], action){
    switch(action.type){
        case ADD_BLOCK:
            return [
                ...state,
                action.block
            ];
        case UPDATE_BLOCK_NAME:
            return state.map(block => {
                if(action.block === block){
                    action.block.name = action.name;
                    return action.block;
                }

                return block;
            });
        default:
            return state
    }
}

function blockViewModels(state = [], action){
    switch(action.type){
        case ADD_BLOCK:
            return [
                ...state,
                action.blockViewModel
            ];
        default:
            return state;
    }
}

function connections(state = [], action){
    switch(action.type){
        case ADD_CONNECTION:
            return [
                ...state,
                action.connection
            ];
        default:
            return state;
    }
}

function connectionViewModels(state = [], action){
    switch(action.type){
        case ADD_CONNECTION:
            return [
                ...state,
                action.connectionViewModel
            ];
        default:
            return state;
    }
}

function visibilityFilter(state = SHOW_ALL, action){
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

const blockStore = combineReducers({visibilityFilter, blocks, blockViewModels, connections, connectionViewModels});

export default blockStore;