import Port from "../Ports/Port";

export default class PortBuilder{
    buildFlowPort(ID, block, type, direction){
        return new Port(ID, block, type, 'Flow', `${direction}${ID}`);
    }

    buildDataPort(ID, block, type, dataType, direction){
        return new Port(ID, block, type, dataType, `${direction}${ID}`);
}

    portType(type, direction){
        return {type: type, direction: direction}
    }

    buildLeftDataPort(ID = 0, block, dataType){
        return this.buildDataPort(ID, block, this.portType('data', 'left'), dataType, 'left');
    }

    buildRightDataPort(ID = 0, block, dataType){
        return this.buildDataPort(ID, block, this.portType('data', 'right'), dataType, 'right');
    }

    buildLeftFlowPort(ID = 0, block){
        return this.buildFlowPort(ID, block, this.portType('flow', 'left'), 'left');
    }

    buildRightFlowPort(ID = 0, block){
        return this.buildFlowPort(ID, block, this.portType('flow', 'right'), 'right');
    }
}
