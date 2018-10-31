import React, {Component} from 'react';

export default class ConnectionView extends Component{
    render(){
        return (
            <path style={{fill: 'none', stroke: 'red'}} d={'M100,250 C376,250 91,67 402,88'}/>
        );
    }
}