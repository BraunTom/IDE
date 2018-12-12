import config from '../../Configuration/TypeColor'

export default class Port{
    constructor(ID, owner, type, dataType, gridArea){
        this.ID = ID;
        this._gridArea = gridArea;
        this.type = type;   // { type, direction }
        this.dataType = dataType;
        this.owner = owner;
    }

    matches(otherModel){
        return this.type.type === otherModel.type.type && this.type.direction !== otherModel.type.direction;
    }

    get gridArea(){
        return this._gridArea;
    }

    get backgroundColor(){
        return config[this.dataType];
    }

    style(){
        return {
            gridArea: this.gridArea,
            background: this.backgroundColor
        };
    }
}