import React from 'react';
import renderer from 'react-test-renderer';
import Button from '.';
import {shallow} from 'enzyme';


describe('Button',()=>{
    it('should trigger onClick on clicking the button',()=>{
        const wrapper=shallow(<Button buttonText="testing" onClick={jest.fn()}/>);
        wrapper.find('button').simulate('click');
        expect(wrapper.props().onClick).toHaveBeenCalled();
    })
    it('should render a button',()=>{
        const tree=renderer.create(<Button/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
});