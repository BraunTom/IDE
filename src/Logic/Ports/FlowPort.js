export default class FlowPort{
    constructor(ID){
        this.ID = ID;
    }

    gridArea(){
        return 'none';
    }

    style(){
        return {
            gridArea: this.gridArea()
        };
    }
}