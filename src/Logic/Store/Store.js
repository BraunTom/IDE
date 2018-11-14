import BlockView from "../../Components/BlockView";
import React from "react";
import ConnectionView from "../../Components/ConnectionView";
import StoreSegment from "./StoreSegment";

export default class Store{
    constructor(externFunctions){
        this.blocks = new StoreSegment();
        this.connections = new StoreSegment();
        this.externFunctions = externFunctions;
    }

    addBlock(block, app){
        this.blocks.add(block, <BlockView app={app} key={block.ID} block={block}/>);
    }

    addConnection(connection){
        this.connections.add(connection, <ConnectionView key={connection.ID} connection={connection}/>);
    }

    get blockViews(){
        return this.blocks.views;
    }

    get connectionViews(){
        return this.connections.views;
    }
}