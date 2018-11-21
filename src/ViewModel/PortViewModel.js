import ViewModel from "./ViewModel";
import Point from "../Logic/Point";

export default class PortViewModel extends ViewModel{
    get position(){
        const boundingRect = this.myView.ref.getBoundingClientRect();
        return new Point(boundingRect.x, boundingRect.y);
    }

    get center(){
        const boundingRect = this.myView.ref.getBoundingClientRect();
        return new Point(boundingRect.x + boundingRect.width / 2, boundingRect.y + boundingRect.height / 2)
    }

    wantsDrop(portViewModel){
        return this.model.matches(portViewModel.model);
    }
}