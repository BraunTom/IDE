import Port from "./Port";

export default class FlowPortIn extends Port{
    get gridArea() {
        return `left${this.ID}`;
    }
}