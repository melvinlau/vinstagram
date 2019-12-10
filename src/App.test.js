import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import App from './App';
import Sidebar from './components/Sidebar';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('<App />', () => {
  it('renders a single <Sidebar /> component', () => {
    const app = shallow(<App />);
    expect(app.find(Sidebar).length).toBe(1);
  });
});
