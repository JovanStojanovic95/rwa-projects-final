import React, { Component } from 'react';
//import './MyButton.css';
//import  {MovieService}  from "./service/movie-service";
//import ResolveBox from "./models/ResolveBox";
class MyButton extends Component {
    constructor(props)
    {
        super(props);
        this.onClickMethod = this.onClickMethod.bind(this);
    }
    onClickMethod() {
        this.props.onClick(this.props.name);
      }

    render() {
    return (
      <button onClick={this.onClickMethod}>{this.props.ButName} 
    </button>
    );
  }
  
}


export default MyButton;
