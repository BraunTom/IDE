import BlockView from "../../Components/BlockView";
import React from "react";
import ConnectionView from "../../Components/ConnectionView";
import TheOneBuilder from "../Builder/TheOneBuilder";
import BlockViewModel from "../../ViewModel/BlockViewModel";
import ConnectionViewModel from "../../ViewModel/ConnectionViewModel";
import Point from "../Point";

export const ADD_BLOCK = 'ADD_BLOCK';
export const ADD_CONNECTION = 'ADD_CONNECTION';
export const UPDATE_BLOCK_NAME = 'UPDATE_BLOCK_NAME';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL'
};

export function addBlock(block, position = new Point(0, 0)){
    const blockViewModel = new BlockViewModel(block, position);
    return { type: ADD_BLOCK, block, blockViewModel };
}

export function updateBlockName(block, newName){
    return { type: UPDATE_BLOCK_NAME, block, newName };
}

export function addConnection(connection, start, end){
    const connectionViewModel = new ConnectionViewModel(connection, start, end);
    return { type: ADD_CONNECTION, connection, connectionViewModel };
}