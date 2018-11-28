import {Component} from 'react'

class FunctionFinder extends Component{
    functions(){

    }

    render(){
        return (
            <div>
                <ul>
                    {this.functions()}
                </ul>
            </div>
        );
    }
}