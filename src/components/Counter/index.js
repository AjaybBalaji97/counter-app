import React, { Component } from 'react';
import Button from '../Button'

class Counter extends Component {
  state={
    counter:this.props.initialVal
  }
  incrementCount=()=>{
    this.setState({
      counter:this.state.counter+1
    })
  };
  decrementCount=()=>{
    this.setState({
      counter:this.state.counter-1
    })
  };
  render() {
    return (
    <div className="counterWindow" align="center">
        COUNTER:{this.state.counter}
       <div><Button buttonText="ADD" onClick={this.incrementCount}/>
            <Button buttonText="MINUS" onClick={this.decrementCount}/>
        </div>
    </div>
    );
  }
}

export default Counter;
