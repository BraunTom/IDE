import React from "react";
import Point from "../Point";
import ConnectionView from "../../Components/ConnectionView";
import BlockView from "../../Components/BlockView";

export const ADD_BLOCK = 'ADD_BLOCK';
export const SET_DRAG_START = 'SET_DRAG_START';
export const ADD_CONNECTION = 'ADD_CONNECTION';
export const REMOVE_CONNECTION = 'REMOVE_CONNECTION';
export const UPDATE_BLOCK_NAME = 'UPDATE_BLOCK_NAME';
export const BRING_BLOCK_TO_FRONT = 'BRING_BLOCK_TO_FRONT';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL'
};

export function addBlock(block, position = new Point(0, 0)){
    const blockView = <BlockView key={block.ID} block={block} initialPosition={position}/>;
    return { type: ADD_BLOCK, block, blockView };
}

export function updateBlockName(block, newName){
    return { type: UPDATE_BLOCK_NAME, block, newName };
}

export function bringBlockToFront(block){
    return { type: BRING_BLOCK_TO_FRONT, block }
}


// TODO: Handle connections correctly
export function addConnection(start, end){
    const connection = {};
    const connectionView = <ConnectionView start={start} end={end}/>;
    return { type: ADD_CONNECTION, connection, connectionView };
}

export function removeConnection(connectionView){
    connectionView.props.start.removeConnection(connectionView);
    connectionView.props.end.removeConnection(connectionView);
    return { type: REMOVE_CONNECTION, connectionView}
}

export function setDragStart(start){
    return { type: SET_DRAG_START, start }
}