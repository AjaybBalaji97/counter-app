import React,{Component} from 'react';
import { connect } from 'react-redux';
import { addCounter,subtractCounter } from '../../actions';
import Button from '../../components/Button' ;
export class Counter extends Component{     
  
  incrementCount=()=>{
    this.props.onAddClick();
  }
  decrementCount=()=>{
    this.props.onMinusClick();
  }
  render(){
    //console.log(this.props);
  return (
    <div className="counterWindow" align="center">
        COUNTER:{this.props.counter}
       <div><Button className="ADD" buttonText="ADD" onClick={this.incrementCount}/>
            <Button className="SUB" buttonText="MINUS" onClick={this.decrementCount}/>
        </div>
    </div>
  )
        }
}
const mapStateToProps = state => {
  console.log(state);
    return {
      counter:state.Counter
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onAddClick:()=>{dispatch(addCounter())},
      onMinusClick:()=>{dispatch(subtractCounter())}
      
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Counter)



// let AddTodo = ({ dispatch }) => {
//     let input;
//     console.log(dispatch);
//     return (
//       <div>
//         <form
//           onSubmit={e => {
//             e.preventDefault()
//             if (!input.value.trim()) {
//               return
//             }
//             dispatch(addTodo(input.value))
//             input.value = ''
//           }}
//         >
//           <input
//             ref={node => {
//               input = node
//             }}
//           />
//           <button type="submit">Add Todo</button>
//         </form>
//       </div>
//     )
//   }
//   AddTodo = connect()(AddTodo)
  
//   export default AddTodo