import React from 'react';
import SignUp from '../components/pages/signup.jsx';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


describe('Signup page', () => {
  it('should provide a signup form for the user', () => {
    const wrapper = shallow(<SignUp />)
    expect(wrapper.find('Form').exists()).toBeTruthy()
  })
})