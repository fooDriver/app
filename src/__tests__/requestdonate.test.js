import React from 'react';
import RequestDonate from '../components/pages/requestdonate.jsx';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Request/Donate page', () => {
  xit('renders ', () => {
    const wrapper = shallow(<RequestDonate />)
    const requestButton = wrapper.find('button')
    requestButton.simulate('click')

  })

  it('can increment the count when the button is clicked', () => {
    const wrapper = shallow(<RequestDonate />)
    const incrementButton = wrapper.find('button').first()
    incrementButton.simulate('click')
    console.log('This is what it is - ', incrementButton.text());
    // const quantity = wrapper.find('p').text()
    // expect(quantity).toEqual('Pantry {idx + 2}')
  })
})