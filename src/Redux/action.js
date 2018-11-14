export const ADD_BLOCK = 'ADD_BLOCK';
export const ADD_CONNECTION = 'ADD_CONNECTION';
export const UPDATE_BLOCK_NAME = 'UPDATE_BLOCK_NAME';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL'
};

export function addBlock(block){
    return { type: ADD_BLOCK, block };
}

export function addConnection(){
    return {type: ADD_CONNECTION, }
}

export function updateBlockName(block, newName){
    return { type: UPDATE_BLOCK_NAME, block, newName };
}

