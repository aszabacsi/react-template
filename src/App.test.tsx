import { shallow } from 'enzyme';
import * as React from 'react';
import App from './App';

describe('App', () => {
  it('Should render App', () => {
    const app = shallow(<App/>);
    expect(app.find('div')).toHaveLength(1);
  });
});

