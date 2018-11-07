import FlowConnections from "../Ports/FlowConnections";
import DataConnections from "../Ports/DataConnections";

export default class Block{
    constructor(ID, name){
        this.ID = ID;
        this.type = 'basicBlock';
        this.name = name;

        this.flowConnections = new FlowConnections(1, 2);
        this.dataConnections = new DataConnections(3, 1);
    }
}
