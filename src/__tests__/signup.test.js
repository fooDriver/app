import React from 'react';
import Form from '../components/form/signup.jsx';
import SignupComponent from '../components/pages/signup.jsx';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Request from '../../__mocks__/superagent.js';
Enzyme.configure({ adapter: new Adapter() });

describe('<Form/Signup>', () => {
  it('is alive at app start', () => {
    let app = shallow(<Form />);
    expect(app.find('form').exists()).toBeTruthy();
    expect(app.find('label').exists()).toBeTruthy();
    expect(app.find('input').exists()).toBeTruthy();
    expect(app.state('role')).toBeDefined();
  });
});

describe('<Component Signup>', () => {
  it('should render the header', () => {
    let app = shallow(<SignupComponent />);
    expect(app.find('h1').text()).toBe('Sign up for fooDriver!');
  });
})