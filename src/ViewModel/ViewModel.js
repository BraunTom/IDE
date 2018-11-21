export default class ViewModel{
    constructor(model){
        this.model = model;
        this.initialize(...Array.from(arguments).slice(1));
    }

    initialize(){}

    bind(view){
        this.myView = view;
        this.myView.state = this.bindProperties();
    }

    bindProperties(){
        return {};
    }

    updateProperties(){
        return {}
    }

    updateView(nameOfUpdatedProperty, internalName = nameOfUpdatedProperty){
        if(!this.myView){
            console.warn('Tried to update unbound myView. Don\'t know what to update');
            return;
        }

        this.myView.setState(this.updateProperties()[nameOfUpdatedProperty](this[internalName]))
    }
}