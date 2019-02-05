import React, { Component } from 'react';
import './Button.css'

/*class Button extends Component {
  render() {
    let styles={
      color:'white',
    }
    return (
        <button type="button" id ="button" onClick={this.props.onClick}>{this.props.buttonText}</button>
    );
  }
}*/


const Button=(props)=><button type="button" id ="button" onClick={props.onClick}>{props.buttonText}</button>


export default Button;
