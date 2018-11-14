import BlockView from "../../Components/BlockView";
import React from "react";
import ConnectionView from "../../Components/ConnectionView";
import StoreSegment from "./StoreSegment";

export default class Store{
    constructor(){
        this.blocks = new StoreSegment();
        this.connections = new StoreSegment();
    }

    addBlock(block){
        this.blocks.add(block, <BlockView block={block}/>);
    }

    addConnection(connection){
        this.connections.add(connection, <ConnectionView connection={connection}/>);
    }

    get blockViews(){
        return this.blocks.views;
    }

    get connectionViews(){
        return this.connections.views;
    }
}