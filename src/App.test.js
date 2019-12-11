import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import App from './App';
import Sidebar from './components/Sidebar/Sidebar';

describe('<App />', () => {

  it('renders a single <Router /> component', () => {
    const app = shallow(<App />);
    expect(app.find(Router).length).toBe(1);
  });

  it('renders a single <Sidebar /> component', () => {
    const app = shallow(<App />);
    expect(app.find(Sidebar).length).toBe(1);
  });

});
