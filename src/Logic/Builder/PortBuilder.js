import Port from "../Ports/Port";

export default class PortBuilder{
    buildFlowPort(ID, block, direction, color){
        return new Port(ID, block, `${direction}${ID}`, color);
    }

    buildLeftDataPort(ID = 0, block){
        return this.buildFlowPort(ID, block, 'left', 'blue');
    }

    buildRightDataPort(ID = 0, block){
        return this.buildFlowPort(ID, block, 'right', 'blue');
    }

    buildLeftFlowPort(ID = 0, block){
        return this.buildFlowPort(ID, block, 'left', 'red');
    }

    buildRightFlowPort(ID = 0, block){
        return this.buildFlowPort(ID, block, 'right', 'red');
    }
}
