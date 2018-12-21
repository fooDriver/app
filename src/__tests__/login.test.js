import React from 'react';
import Login from '../components/auth/login.js';
import Driver from '../components/pages/driver.jsx';
import superagent from 'superagent';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<Login />', () => {
  it('should log people in', () => {
    let driver = mount(<Driver />);
    console.log('driver text',driver.find('h2').text());
    expect(driver.find('h2').text()).toBe('Loading...');
  });

  it('should log people in', () => {
    let driver = mount(<Driver />);
    driver.setState({
      name: 'Fred',
    });
    expect(driver.find('h2').text()).toBe('Let\'s Get Moving Fred!');
  });

  
});