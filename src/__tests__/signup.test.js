import React from 'react';
import Form from '../components/form/signup.jsx';
import SignupComponent from '../components/pages/signup.jsx';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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

describe('Signup page', () => {
  it('should provide a signup form for the user', () => {
    const wrapper = shallow(<SignupComponent />)
    expect(wrapper.find('Form').exists()).toBeTruthy();
  });
});
