import TheOneBuilder from "../Builder/TheOneBuilder";

export default class DataConnections{
    constructor(inputCount, outputCount){
        this.inputs = TheOneBuilder.buildLeftDataPorts(inputCount);
        this.outputs = TheOneBuilder.buildRightDataPorts(outputCount);
    }

    initArray(length, portClass){
        let arr = [];

        for(let i = 0; i < length; i++){
            arr.push(new portClass(i));
        }

        return arr;
    }
}