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
  it('should render ball button with expected attributes', () => {
    const dashboardComponent = rtl.render(<Dashboard />);
    const ballButton = dashboardComponent.getByTestId('ball-button');
    const isButton = ballButton.matches('button');
    const isLabeledBall = ballButton.textContent === 'Ball';
    expect(isButton).toBe(true);
    expect(isLabeledBall).toBe(true);
    // expect(dashboardComponent.getByText(/ball/i));
  });

  it('should render strike button with expected attributes', () => {
    const dashboardComponent = rtl.render(<Dashboard />);
    const strikeButton = dashboardComponent.getByTestId('strike-button');
    const isButton = strikeButton.matches('button');
    const isLabeledStrike = strikeButton.textContent === 'Strike';
    expect(isButton).toBe(true);
    expect(isLabeledStrike).toBe(true);
    // expect(dashboardComponent.getByText(/strike/i));
  });

  it('should render foul button with expected attributes', () => {
    const dashboardComponent = rtl.render(<Dashboard/>);
    const foulButton = dashboardComponent.getByTestId('foul-button');
    const isButton = foulButton.matches('button');
    const isLabeledFoul = foulButton.textContent === 'Foul';
    expect(isButton).toBe(true);
    expect(isLabeledFoul).toBe(true);
  });

  it('should render hit button with expected attributes', () => {
    const dashboardComponent = rtl.render(<Dashboard />);
    const hitButton = dashboardComponent.getByTestId('hit-button');
    const isButton = hitButton.matches('button');
    const isLabeledHit = hitButton.textContent === 'Hit';
    expect(isButton).toBe(true);
    expect(isLabeledHit).toBe(true);
    // expect(dashboardComponent.getByText(/hit/i));
  });
});
});

