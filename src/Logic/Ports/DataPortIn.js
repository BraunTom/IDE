import Port from "./Port";

export default class DataPortIn extends Port{
    get gridArea() {
        return `left${this.ID}`;
    }


    get backgroundColor() {
        return 'blue';
    }
}