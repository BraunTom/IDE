import ViewModel from "./ViewModel";

export default class ConnectionViewModel extends ViewModel{
    initialize(startPort, endPort){
        this.start = startPort;
        this.end = endPort;
    }
}