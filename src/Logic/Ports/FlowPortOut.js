import FlowPort from "./FlowPort";

export default class FlowPortOut extends FlowPort{
    gridArea() {
        return `right${this.ID}`;
    }
}