export default class Port{              // TODO remove all other classes
    constructor(ID, gridArea, color = 'black'){
        this.ID = ID;
        this._gridArea = gridArea;
        this.color = color;
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