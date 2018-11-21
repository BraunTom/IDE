import ViewModel from "./ViewModel";

export default class ConnectionViewModel extends ViewModel{
    initialize(startPort, endPort){
        console.log(startPort, endPort);
        this.start = startPort;
        this.end = endPort;
    }

    get startPosition(){
        return this.start.center;
    }

    get endPosition(){
        return this.end.center;
    }
}