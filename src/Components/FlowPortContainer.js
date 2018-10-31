import React, {Component} from 'react';
import PortView from "./PortView";
import '../ComponentStyles/FlowPortContainer.css'

export default class FlowPortContainer extends Component{
    generatePortViewFor(array){
        return array.map(elm => <PortView id={elm.ID} style={elm.style()}/>)
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
        console.log(this.generateGridTemplateAreas(rowCount));
        return (
            <div style={{
                    gridTemplateRows: gridTemplateRowStyle,
                    gridTemplateAreas: this.generateGridTemplateAreas(rowCount),
                    height: rowCount * 15}}
                 className={'flowPortContainer'}>
                {this.generatePortViewFor(inputs)}
                {this.generatePortViewFor(outputs)}
            </div>
        );
    }
}
