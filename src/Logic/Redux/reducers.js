import {
    ADD_BLOCK,
    ADD_CONNECTION,
    SET_DRAG_START,
    SET_VISIBILITY_FILTER,
    UPDATE_BLOCK_NAME,
    VisibilityFilters
} from "./actions";
import {combineReducers} from "redux";
import React from "react";
const {SHOW_ALL} = VisibilityFilters;

export const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    blocks: [],
    blockViews: [],
    connections: [],
    connectionViews: [],
    dragStart: null
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

function blockViews(state = [], action){
    switch(action.type){
        case ADD_BLOCK:
            return [
                ...state,
                action.blockView
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

function connectionViews(state = [], action){
    switch(action.type){
        case ADD_CONNECTION:
            return [
                ...state,
                action.connectionView
            ];
        default:
            return state;
    }
}

function dragStart(state = null, action){
    switch(action.type){
        case SET_DRAG_START:
            return action.start;
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

const blockStore = combineReducers({visibilityFilter, dragStart, blocks,
    blockViews, connections, connectionViews});

export default blockStore;