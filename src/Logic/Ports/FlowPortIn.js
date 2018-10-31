import FlowPort from "./FlowPort";

export default class FlowPortIn extends FlowPort{
    gridArea() {
        return `left${this.ID}`;
    }
}