export default class ViewModel{
    constructor(model){
        this.model = model;
        this.initialize(...Array.from(arguments).slice(1));
    }

    initialize(){}

    bind(view){
        this.view = view;
        this.view.state = this.bindProperties();
    }

    bindProperties(){
        return {};
    }

    updateProperties(){
        return {}
    }

    updateView(nameOfUpdatedProperty, internalName = nameOfUpdatedProperty){
        if(!this.view){
            console.warn('Tried to update unbound view. Don\'t know what to update');
            return;
        }

        this.view.setState(this.updateProperties()[nameOfUpdatedProperty](this[internalName]))
    }
}