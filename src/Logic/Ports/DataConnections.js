import DataPortIn from "./DataPortIn";
import DataPortOut from "./DataPortOut";

export default class DataConnections{
    constructor(inputCount, outputCount){
        this.inputs = this.initArray(inputCount, DataPortIn);
        this.outputs = this.initArray(outputCount, DataPortOut);
    }

    initArray(length, portClass){
        let arr = [];

        for(let i = 0; i < length; i++){
            arr.push(new portClass(i));
        }

        return arr;
    }
}