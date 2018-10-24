import React, { Component } from 'react';
import '../ComponentStyles/Header.css';

export default class Header extends Component{
    render(){
        return (
            <div className={'Header'}>{this.props.title}</div>
        );
    }
}

