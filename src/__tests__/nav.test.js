import React from 'react';
import Nav from '../components/modules/nav.jsx';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

describe('Nav module', () => {
  it('should have a home item in the nav bar', () => {
    const wrapper = shallow(<Nav isAuth={ true } />);
    expect(wrapper.find(<Link to="/">Home</Link>)).toBeTruthy();
  })
  it('should have an about item in the nav bar', () => {
    const wrapper = shallow(<Nav isAuth={ true } />);
    expect(wrapper.find(<Link to="/about">About</Link>)).toBeTruthy();
  })
})