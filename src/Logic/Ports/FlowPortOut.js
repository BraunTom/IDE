import Port from "./Port";

export default class FlowPortOut extends Port{
    get gridArea() {
        return `right${this.ID}`;
    }
}