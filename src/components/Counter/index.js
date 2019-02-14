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
  // static getDerivedStateFromProps(){
  //   return {counter:this.props.initialVal};
  // }
  componentWillReceiveProps(){
    //console.log(3);
  }
  componentWillUnmount(){
    //console.log(4);
  }
  componentdidUpdate(){
    //console.log(5);
  }
  shouldComponentUpdate(){
    console.log(6);
    return true;
  }
  decrementCount=()=>{
    this.setState({
      counter:this.state.counter-1
    })
  };
  render() {
    //console.log(13);
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
