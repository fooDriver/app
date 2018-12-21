import React from 'react';
import Footer from '../components/modules/footer.jsx';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Footer module', () => {
  it('should render a footer', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('footer').exists()).toBeTruthy()
  });
});