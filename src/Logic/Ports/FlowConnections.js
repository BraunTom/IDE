import TheOneBuilder from "../Builder/TheOneBuilder";

export default class FlowConnections{
    constructor(inputCount, outputCount){
        this.inputs = TheOneBuilder.buildLeftFlowPorts(inputCount);
        this.outputs = TheOneBuilder.buildRightFlowPorts(outputCount);
    }
}