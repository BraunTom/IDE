import FlowConnections from "../Ports/FlowConnections";
import DataConnections from "../Ports/DataConnections";

export default class Block{
    constructor(ID, name, flowsIn, flowsOut, dataIn, dataOut){
        this.ID = ID;
        this.type = 'basicBlock';
        this.name = name;

        this.flowConnections = new FlowConnections(this, flowsIn, flowsOut);
        this.dataConnections = new DataConnections(this, dataIn, dataOut);
        console.log(this, dataIn, dataOut);
    }
}
