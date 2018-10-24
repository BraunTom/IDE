import BlockBuilder from "./BlockBuilder";

export default class TheOneBuilder{
    static ID = 0;
    static blockBuilder = new BlockBuilder();

    static buildBlock(name){
        return TheOneBuilder.blockBuilder.buildBlock(TheOneBuilder.ID, name);
    }
}