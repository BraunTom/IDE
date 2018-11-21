import React, {Component} from 'react';

export default class ConnectionView extends Component{
    asData(point){
        console.log(point);
        return Array.from(point).join(',');
    }

    pathData(){
        const startPosition = this.props.viewModel.startPosition;
        const endPosition = this.props.viewModel.endPosition;
        const centerX = (startPosition.x + endPosition.x) / 2;
        return `M${this.asData(startPosition)} C${centerX},${startPosition.y} 
                ${centerX},${endPosition.y} ${this.asData(endPosition)}`;
    }

    render(){
        this.props.viewModel.bind(this);
        return (
            <path style={{fill: 'none', stroke: 'red'}} d={this.pathData()}/>
        );
    }
}