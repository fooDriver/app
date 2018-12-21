import React from 'react';
import Nav from '../components/modules/nav.jsx';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

xdescribe('Nav module', () => {
  it('should have link to the home page', () => {
    const wrapper = shallow(<Nav />)
    expect(wrapper.find('a').exists()).toBeTruthy(); 
  })
})