import React, {Component} from 'react';
import Point from "../Logic/Point";
import {addBlock, removeConnection} from "../Logic/Redux/actions";
import connect from "react-redux/es/connect/connect";

let color = 'red';

class ConnectionView extends Component{
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

    click(){
        this.props.removeConnection(this);
    }

    componentDidMount(){
        this.props.start.addConnection(this);
        this.props.end.addConnection(this);
    }

    componentWillUnmount(){
        this.props.start.removeConnection(this);
        this.props.end.removeConnection(this);
    }

    update(){
        this.forceUpdate()
    }

    render(){
        return (
            <g>
                <path style={{fill: 'none', stroke: color}} d={this.pathData()}/>
                <path style={{fill: 'none', stroke: 'transparent', strokeWidth: 10}}
                      d={this.pathData()} onClick={this.click.bind(this)} />
            </g>
        );
    }
}

function mapStateToProps(state){
    return {}
}

function mapDispatchToProps(dispatch){
    return {
        removeConnection: (connectionView) => removeConnection(connectionView)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionView)