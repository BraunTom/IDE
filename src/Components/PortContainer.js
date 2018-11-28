import React, {Component} from 'react';
import '../ComponentStyles/PortContainer.css';
import PortView from "./PortView";

export default class DataPortContainer extends Component{
    constructor(props){
        super(props);
        this.state = {inputPortView: this.generatePortViewFor(this.props.ports.inputs),
                      outputPortView: this.generatePortViewFor(this.props.ports.outputs)};
    }

    generatePortViewFor(array){
        return array.map(port => <PortView key={port.ID} port={port} style={port.style()}/>);
    }

    generateGridTemplateAreas(count){
        let result = [];

        for(let i = 0; i < count; i++){
            result.push(`"left${i} . right${i}"`);
        }

        return result.join('\n');
    }

    render(){
        let inputs = this.props.ports.inputs;
        let outputs = this.props.ports.outputs;
        const rowCount = inputs.length > outputs.length ? inputs.length : outputs.length;
        const gridTemplateRowStyle = (new Array(rowCount)).fill('auto').join(' ');

        return (
            <div style={{
                    gridTemplateRows: gridTemplateRowStyle,
                    gridTemplateAreas: this.generateGridTemplateAreas(rowCount),
                    height: rowCount * 15}}
                 className={'flowPortContainer'}>
                    {this.state.inputPortView}
                    {this.state.outputPortView}
            </div>
        );
    }
}