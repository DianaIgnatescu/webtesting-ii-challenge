import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import App from './App';

afterEach(rtl.cleanup);

describe('App component', () => {
  it('should render without crashing', () => {
    rtl.render(<App />);
  });
});

describe('Display component', () => {
  it('should render without crashing', () => {
    const component = rtl.render(<Display balls={0} strikes={0} />);
    expect(component).toBeTruthy();
  });
  it('should render with the given number of balls', () => {
    const displayComponent = rtl.render(<Display balls={1} strikes={0} />);
    const expected = 'Balls: 1';
    const actual = displayComponent.getByTestId('ball-count').textContent;
    expect(actual).toEqual(expected);
  });
  it('should render with the given number of strikes', () => {
    const displayComponent = rtl.render(<Display balls={0} strikes={1} />);
    const expected = 'Strikes: 1';
    const actual = displayComponent.getByTestId('strike-count').textContent;
    expect(actual).toEqual(expected);
  });
});

describe('Dashboard component', () => {
  it('should render without crashing', () => {
    const component = rtl.render(<Dashboard />);
    expect(component).toBeTruthy();
  });
});

