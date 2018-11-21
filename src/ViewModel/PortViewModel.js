import ViewModel from "./ViewModel";

export default class PortViewModel extends ViewModel{
    get position(){
        console.log(this.view);
        console.log(this.view.getBoundingClientRect());
        return this.view.getBoundingClientRect();
    }
}