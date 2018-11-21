import React, { Component } from 'react';
import '../ComponentStyles/Header.css';
import Point from "../Logic/Point";

export default class Header extends Component{
    constructor(props){
        super(props);
        this.img = this.createDragImage();
    }

    createDragImage(){
        const img = document.createElement('canvas');
        img.width = 1;
        img.height = 1;
        img.style.background = 'rgba(0, 0, 0, 0)';
        return img;
    }

    dragStart(e){
        document.body.appendChild(this.img);

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setDragImage(this.img, 0, 0);

        this.dragStartDifference = this.props.parentPosition.subtract(...(new Point(e.pageX, e.pageY)));
    }

    drag(e){
        this.props.drag(this.dragStartDifference.add(...new Point(e.pageX, e.pageY)));
    }

    drop(e){
        e.preventDefault();
    }

    dragOver(e){
        e.preventDefault();
    }

    dragEnd(e){
        document.body.removeChild(this.img);
    }

    render(){
        return (
            <div draggable={true}
                 onDragStart={this.dragStart.bind(this)}
                 onDrag={this.drag.bind(this)}
                 onDragOver={this.dragOver.bind(this)}
                 onDrop={this.drop.bind(this)}
                 onDragEnd={this.dragEnd.bind(this)}
                 className={'Header'}>{this.props.title}</div>
        );
    }
}

