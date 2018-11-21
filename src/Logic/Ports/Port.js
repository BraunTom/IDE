export default class Port{
    constructor(ID, owner, type, gridArea, color = 'black'){
        this.ID = ID;
        this._gridArea = gridArea;
        this.color = color;
        this.type = type;   // { type, direction }
        this.owner = owner;
    }

    matches(otherModel){
        return this.type.type === otherModel.type.type && this.type.direction !== otherModel.type.direction;
    }

    get gridArea(){
        return this._gridArea;
    }

    get backgroundColor(){
        return this.color;
    }

    style(){
        return {
            gridArea: this.gridArea,
            background: this.backgroundColor
        };
    }
}