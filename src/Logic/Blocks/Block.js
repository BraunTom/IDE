import FlowConnections from "../Ports/FlowConnections";
import DataConnections from "../Ports/DataConnections";

export default class Block{
    constructor(ID, name, connectionConfig = {flowInCount: 1, flowOutCount: 1, dataInCount: 0, dataOutCount: 0}){
        this.ID = ID;
        this.type = 'basicBlock';
        this.name = name;


        this.flowConnections = new FlowConnections(connectionConfig.flowInCount, connectionConfig.flowOutCount);
        this.dataConnections = new DataConnections(connectionConfig.dataInCount, connectionConfig.dataOutCount);
    }
}
