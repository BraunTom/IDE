import TheOneBuilder from "../Builder/TheOneBuilder";

export default class FlowConnections{
    constructor(block, inputs, outputs){
        this.inputs = TheOneBuilder.buildLeftFlowPorts(inputs.length, block);
        this.outputs = TheOneBuilder.buildRightFlowPorts(outputs.length, block);
    }
}