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

    static buildLeftDataPorts(count, block){
        return collect(x => TheOneBuilder.portBuilder.buildLeftDataPort(x, block, 'Boolean'), count);
    }

    static buildRightDataPorts(count, block){
        return collect(x => TheOneBuilder.portBuilder.buildRightDataPort(x, block, 'Boolean'), count);
    }

    static buildLeftFlowPorts(count, block){
        return collect(x => TheOneBuilder.portBuilder.buildLeftFlowPort(x, block), count);
    }

    static buildRightFlowPorts(count, block){
        return collect(x => TheOneBuilder.portBuilder.buildRightFlowPort(x, block), count);
    }
}