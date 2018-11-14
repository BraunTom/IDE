export default class Port{              // TODO remove all other classes
    constructor(ID, owner, gridArea, color = 'black'){
        this.ID = ID;
        this._gridArea = gridArea;
        this.color = color;
        this.owner = owner;
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