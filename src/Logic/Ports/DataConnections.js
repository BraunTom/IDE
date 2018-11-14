import TheOneBuilder from "../Builder/TheOneBuilder";

export default class DataConnections{
    constructor(inputCount, outputCount){
        this.inputs = TheOneBuilder.buildLeftDataPorts(inputCount, this);
        this.outputs = TheOneBuilder.buildRightDataPorts(outputCount, this);
    }
}