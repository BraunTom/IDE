import BlockBuilder from "./BlockBuilder";
import PortBuilder from "./PortBuilder";

function collect(fn, count){
    let arr = [];

    for(let i = 0; i < count; i++){
        arr.push(fn(i));
    }

    return arr;
}

export default class TheOneBuilder{     //to build them all
    static ID = 0;
    static portBuilder = new PortBuilder();
    static blockBuilder = new BlockBuilder();

    static buildBlock(name){
        return TheOneBuilder.blockBuilder.buildBlock(TheOneBuilder.ID++, name);
    }

    static buildBlockFromPrimitive(primitive){
        return TheOneBuilder.blockBuilder.buildBlockFromPrimitive(primitive);
    }

    static buildLeftDataPorts(types, block){
        return collect(index => TheOneBuilder.portBuilder.buildLeftDataPort(index, block, types[index]), types.length);
    }

    static buildRightDataPorts(types, block){
        return collect(index => TheOneBuilder.portBuilder.buildRightDataPort(index, block, types[index]), types.length);
    }

    static buildLeftFlowPorts(count, block){
        return collect(index => TheOneBuilder.portBuilder.buildLeftFlowPort(index, block), count);
    }

    static buildRightFlowPorts(count, block){
        return collect(index => TheOneBuilder.portBuilder.buildRightFlowPort(index, block), count);
    }
}