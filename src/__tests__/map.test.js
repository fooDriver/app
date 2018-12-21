import React from 'react';
import Map from '../components/modules/map.jsx';
import superagent from 'superagent';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<Map/>', () => {
  it('is alive at app start', (done) => {
    superagent.get('https://foodriverdb.herokuapp.com/stops')
      .then(allStops => {
        let app = mount(<Map stops={allStops.body} />);
        expect(app.find('div').exists()).toBeTruthy();
        expect(app.prop('stops')).not.toBeNull();
        done();
      });
  });
});