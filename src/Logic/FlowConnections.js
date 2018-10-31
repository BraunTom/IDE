export default class FlowConnections{
    constructor(inputCount, outputCount){
        this.inputs = this.initArray(inputCount);
        this.outputs = this.initArray(outputCount);
    }

    initArray(length){
        let arr = [];

        for(let i = 0; i < length; i++){
            arr.push(i);
        }

        return arr;
    }
}