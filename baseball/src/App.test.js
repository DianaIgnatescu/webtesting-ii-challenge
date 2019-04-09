import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import App from './App';

afterEach(rtl.cleanup);

describe('<App />', () => {
describe('App component', () => {
  it('should render without crashing', () => {
    rtl.render(<App />);
  });
});

  it('should render Display component', () => {
    const component = rtl.render(<Display balls={0} strikes={0} />);
    expect(component).toBeTruthy();
  });
  it('should render Dashboard component', () => {
    const component = rtl.render(<Dashboard />);
    expect(component).toBeTruthy();
  });
});

