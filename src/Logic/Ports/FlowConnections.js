import FlowPortIn from "./FlowPortIn";
import FlowPortOut from "./FlowPortOut";

export default class FlowConnections{
    constructor(inputCount, outputCount){
        this.inputs = this.initArray(inputCount, FlowPortIn);
        this.outputs = this.initArray(outputCount, FlowPortOut);
    }

    initArray(length, portClass){
        let arr = [];

        for(let i = 0; i < length; i++){
            arr.push(new portClass(i));
        }

        return arr;
    }
}