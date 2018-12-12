import Block from "../Blocks/Block";
import BlockStore from "./BlockStore";

export default class BlockBuilder{
    createBlock(ID, name, flowsIn = [], flowsOut = [], dataIn = [], dataOut = []){
        const block = new Block(ID, name, flowsIn, flowsOut, dataIn, dataOut);
        BlockStore.add(block);
        return block;
    }

    buildBlock(ID, name){
        return this.createBlock(ID, name);
    }

    buildBlockFromPrimitive(primitive){
        return this.createBlock(primitive.ID, primitive.name, ['Flow'], ['Flow'], primitive.inputs, primitive.outputs);
    }
}