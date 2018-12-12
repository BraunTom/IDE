import React, {Component} from 'react';
import Point from "../Logic/Point";

export default class ConnectionView extends Component{
    asData(point){
        return Array.from(point).join(',');
    }

    center(portView){
        const boundingRect = portView.ref.getBoundingClientRect();
        return new Point(boundingRect.x + boundingRect.width / 2, boundingRect.y + boundingRect.height / 2)
    }

    pathData(){
        const startPosition = this.center(this.props.start);
        const endPosition = this.center(this.props.end);
        const centerX = (startPosition.x + endPosition.x) / 2;
        return `M${this.asData(startPosition)} C${centerX},${startPosition.y} 
                ${centerX},${endPosition.y} ${this.asData(endPosition)}`;
    }

    render(){
        return (
            <path style={{fill: 'none', stroke: 'red'}} d={this.pathData()}/>
        );
    }
}