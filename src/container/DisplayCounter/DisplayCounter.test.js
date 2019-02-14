import React from 'react';
import renderer from 'react-test-renderer';
import ConnectedCounter, {Counter} from '.';
import {shallow,mount} from 'enzyme';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { addCounter , subtractCounter} from '../../actions';

describe('Counter',()=>{
    let wrapper;
    // beforeEach(()=>{
    //     wrapper=shallow(<Counter  Counter={10}/>);
    // })
    const addMockFn = jest.fn();
    const subMockFn = jest.fn();
    it('should render a Counter with two buttons',()=>{
        const tree=renderer.create(<Counter/>).toJSON();
        expect(tree).toMatchSnapshot();
        
    })
    it('should initialize a state variable with value same as initialVal',()=>{
        wrapper=shallow(<Counter  counter={10}/>);
        expect(wrapper.instance().props.counter).not.toEqual(undefined);
        expect(wrapper.instance().props.counter).toEqual(10);
    })
    it('should call appropriate function and button click',()=>{
        wrapper=shallow(<Counter  counter={10} onAddClick={addMockFn} onMinusClick={subMockFn}/>);
        wrapper.find(".ADD").simulate('click');
        expect(addMockFn.mock.calls.length).toBe(1);
        wrapper.find(".SUB").simulate('click');
        expect(subMockFn.mock.calls.length).toBe(1);
    })

    
    
});
describe('ConnectedCounter',()=>{
    const initialState = {Counter:10}
    const mockStore = configureStore()
    let store,wrapper;
    beforeEach(()=>{
        store = mockStore(initialState)
        wrapper = mount( <Provider store={store}><ConnectedCounter /></Provider> )
        //wrapper = shallow( <ConnectedCounter store={store} /> )
    })

    it('should render the ConnectedCounter component', () => {
        expect(wrapper.find(ConnectedCounter).length).toEqual(1);
     });
 
    it('check if Props of DumbComponent matches with initialState of the ConnectedComponent', () => {
        console.log(wrapper.find(Counter).instance().props);
        expect(wrapper.find(Counter).instance().props.counter).toEqual(initialState.Counter);
        //expect(wrapper.find(Counter).instance().props.onAddClick()).toEqual(initialState.Counter+1);
     });
    //  xit('chould increment counter on "incrementCount()" ',()=>{
    //     //wrapper=shallow(<Counter  counter={10}/>);
    //     wrapper.find(Counter).instance().incrementCount();
    //     expect(wrapper.find(Counter).instance().props.counter).toEqual(initialState.Counter+1);
    // })
    // xit('chould decrement counter on "decrementCount()" ',()=>{
    //     //wrapper=shallow(<Counter  counter={10}/>);
    //     wrapper.find(Counter).instance().decrementCount();
    //     expect(wrapper.find(Counter).instance().props.counter).toEqual(initialState.Counter-1);
    // })
     
    it('check action on dispatching ', () => {
        let action
        wrapper.find(".ADD").simulate('click');
        wrapper.find(".SUB").simulate('click');
        action = store.getActions()
        expect(action[0].type).toBe("ADD_COUNTER")
        expect(action[1].type).toBe("SUBTRACT_COUNTER")
    });

});
describe('ConnectedCounter and Counter Integration Testing',()=>{
    const initialState = {Counter:10}
    const mockStore = configureStore()
    let store,wrapper

    beforeEach(()=>{
        store = mockStore(initialState)
        wrapper = mount( <Provider store={store}><ConnectedCounter /></Provider> )
    })

    it('check Prop matches with initialState', () => {
        store.dispatch(addCounter())
       expect(wrapper.find(Counter).instance().props.counter).toBe(10);
    });

});