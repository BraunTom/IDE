import TheOneBuilder from "../Builder/TheOneBuilder";

export default class DataConnections{
    constructor(block, inputs, outputs){
        this.inputs = TheOneBuilder.buildLeftDataPorts(inputs, block);
        this.outputs = TheOneBuilder.buildRightDataPorts(outputs, block);
    }
}