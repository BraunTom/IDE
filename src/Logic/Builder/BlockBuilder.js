import Block from "../Blocks/Block";

export default class BlockBuilder{
    buildBlock(ID, name){
        return new Block(ID, name);
    }
}