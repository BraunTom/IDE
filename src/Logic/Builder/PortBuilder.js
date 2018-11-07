import Port from "../Ports/Port";

export default class PortBuilder{
    buildFlowPort(ID, direction, color){
        return new Port(ID, `${direction}${ID}`, color);
    }

    buildLeftDataPort(ID = 0){
        return this.buildFlowPort(ID, 'left', 'blue');
    }

    buildRightDataPort(ID = 0){
        return this.buildFlowPort(ID, 'right', 'blue');
    }

    buildLeftFlowPort(ID = 0){
        return this.buildFlowPort(ID, 'left', 'red');
    }

    buildRightFlowPort(ID = 0){
        return this.buildFlowPort(ID, 'right', 'red');
    }
}
