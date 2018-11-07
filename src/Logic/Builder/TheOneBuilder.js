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
        return TheOneBuilder.blockBuilder.buildBlock(TheOneBuilder.ID, name);
    }

    static buildLeftDataPorts(count){
        return collect(x => TheOneBuilder.portBuilder.buildLeftDataPort(x), count);
    }

    static buildRightDataPorts(count){
        return collect(x => TheOneBuilder.portBuilder.buildRightDataPort(x), count);
    }

    static buildLeftFlowPorts(count){
        return collect(x => TheOneBuilder.portBuilder.buildLeftFlowPort(x), count);
    }

    static buildRightFlowPorts(count){
        return collect(x => TheOneBuilder.portBuilder.buildRightFlowPort(x), count);
    }
}