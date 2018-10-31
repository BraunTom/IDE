import React, { Component } from 'react';
import '../ComponentStyles/Header.css';
import Point from "../Logic/Point";

export default class Header extends Component{
    dragStart(e){
        this.dragStartDifference = this.props.parentPosition.subtract(...(new Point(e.pageX, e.pageY)));
    }

    drag(e){
        this.props.drag((new Point(e.pageX, e.pageY)).add(...this.dragStartDifference));
    }

    drop(e){
        e.preventDefault();
        console.log('drop');
    }

    dragOver(e){
        e.preventDefault();
    }

    render(){
        return (
            <div draggable={true}
                 onDragStart={this.dragStart.bind(this)}
                 onDrag={this.drag.bind(this)}
                 onDragOver={this.dragOver.bind(this)}
                 onDrop={this.drop.bind(this)}
                 className={'Header'}>{this.props.title}</div>
        );
    }
}

