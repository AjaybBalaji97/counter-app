import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '.';
import {shallow} from 'enzyme';


describe('Counter',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallow(<Counter  initialVal={0}/>);
    })
    it('should render a Counter with two buttons',()=>{
        const tree=renderer.create(<Counter/>).toJSON();
        expect(tree).toMatchSnapshot();
        
    })
    it('should initialize a state variable with value same as initialVal',()=>{
        //const wrapper=shallow(<Counter  initialVal={0}/>);
        //wrapper.find('counter').simulate('click');
        expect(wrapper.instance().state.counter).not.toEqual(undefined);
        expect(wrapper.instance().state.counter).toEqual(0);
    })
    it('should increment the counter on "incrementCount" function',()=>{
        //const wrapper=shallow(<Counter  initialVal={1}/>);
        wrapper.instance().incrementCount()
        expect(wrapper.instance().state.counter).toEqual(1)
    })
    it('should decrement the counter on "decrementCount" function',()=>{
        //const wrapper=shallow(<Counter  initialVal={5}/>);
        wrapper.instance().decrementCount()
        expect(wrapper.instance().state.counter).toEqual(-1)
    })
});