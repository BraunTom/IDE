export default class Port{
    constructor(ID){
        this.ID = ID;
    }

    get gridArea(){
        return 'none';
    }

    get backgroundColor(){
        return 'red';
    }

    style(){
        return {
            gridArea: this.gridArea,
            background: this.backgroundColor
        };
    }
}