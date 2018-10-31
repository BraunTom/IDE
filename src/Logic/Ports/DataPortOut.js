import Port from "./Port";

export default class DataPortOut extends Port{
    get gridArea() {
        return `right${this.ID}`;
    }


    get backgroundColor() {
        return 'blue';
    }
}