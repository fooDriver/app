import React from 'react';
import Home from '../components/pages/home.jsx';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<Home/>', () => {
  it('is alive at app start', () => {
    let app = shallow(<Home />);
    expect (app.find('span').exists()).toBeTruthy();
  });

  it('should display the company logo', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('img').exists()).toBeTruthy()
  })
});