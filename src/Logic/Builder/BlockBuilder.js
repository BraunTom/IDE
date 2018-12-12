import Block from "../Blocks/Block";

export default class BlockBuilder{
    buildBlock(ID, name){
        return new Block(ID, name);
    }

    buildBlockFromPrimitive(primitive){
        return new Block(primitive.ID, primitive.name,
            {dataInCount: primitive.inputs.length, dataOutCount: primitive.outputs.length})
    }
}