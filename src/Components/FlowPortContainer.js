import React, {Component} from 'react';
import PortView from "./PortView";
import '../ComponentStyles/FlowPortContainer.css'

export default class FlowPortContainer extends Component{
    render(){
        return (
            <div className={'flowPortContainer'}>
                <PortView/>
            </div>
        );
    }
}
