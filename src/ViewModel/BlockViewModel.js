import Point from "../Logic/Point";
import ViewModel from "./ViewModel";

export default class BlockViewModel extends ViewModel{
    initialize(position = new Point(0, 0)){
        this._position = position;
    }


    bindProperties() {
        return {
            position: this.position
        };
    }


    updateProperties() {
        return {
            position: (newPosition) => ({position: newPosition})
        };
    }

    get name(){
        return this.model.name;
    }

    get flowConnections(){
        return this.model.flowConnections;
    }

    get dataConnections(){
        return this.model.dataConnections;
    }

    get position(){
        return this._position;
    }

    set position(value){
        this._position = value;
        this.updateView('position');
    }
}