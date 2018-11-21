import Port from "../Ports/Port";

export default class PortBuilder{
    buildFlowPort(ID, block, type, direction, color){
        return new Port(ID, block, type, `${direction}${ID}`, color);
    }

    portType(type, direction){
        return {type: type, direction: direction}
    }

    buildLeftDataPort(ID = 0, block){
        return this.buildFlowPort(ID, block, this.portType('data', 'left'), 'left', 'blue');
    }

    buildRightDataPort(ID = 0, block){
        return this.buildFlowPort(ID, block, this.portType('data', 'right'), 'right', 'blue');
    }

    buildLeftFlowPort(ID = 0, block){
        return this.buildFlowPort(ID, block, this.portType('flow', 'left'), 'left', 'red');
    }

    buildRightFlowPort(ID = 0, block){
        return this.buildFlowPort(ID, block, this.portType('flow', 'right'), 'right', 'red');
    }
}
