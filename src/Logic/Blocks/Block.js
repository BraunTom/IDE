import FlowConnections from "../FlowConnections";

export default class Block{
    constructor(ID, name){
        this.ID = ID;
        this.type = 'basicBlock';
        this.name = name;

        this.flowConnections = new FlowConnections(1, 1);
    }
}
