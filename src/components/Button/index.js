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
import PropTypes from 'prop-types';

const Button=(props)=><button type="button" id ="button" onClick={props.onClick}>{props.buttonText}</button>
Button.defaultProps = {
  buttonText: 'DEFAULT'
};
Button.propTypes = {
  buttonText: PropTypes.string
};

export default Button;
