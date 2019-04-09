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

xdescribe('Integration', () => {
  it('should reset balls and strikes when hit is clicked', () => {
    const dashboardComponent = rtl.render(<Dashboard />);
    const displayComponent = rtl.render(<Display balls={0} strikes={0}/>);
    const hitButton = dashboardComponent.getByTestId('hit-button');
    rtl.fireEvent.click(hitButton);
    const strikeCount = displayComponent.getByTestId('strike-count');
    const expectedStrikes = 'Strikes: 0';
    expect(strikeCount).toHaveTextContent(expectedStrikes);
    const ballCount = displayComponent.getByTestId('ball-count');
    const expectedBalls = 'Balls: 0';
    expect(ballCount).toHaveTextContent(expectedBalls);
  });

  it('should update "Display" with "Balls: 1" when ball button is clicked once', () => {
    const dashboardComponent = rtl.render(<Dashboard />);
    const displayComponent = rtl.render(<Display balls={1} strikes={1} />);
    const ballButton = dashboardComponent.getByTestId('ball-button');
    rtl.fireEvent.click(ballButton);
    const ballCount = displayComponent.getByTestId('ball-count');
    const expected = 'Balls: 2';
    expect(ballCount).toHaveTextContent(expected);
  });

  it('should reset the ball count to 0 when the player reaches 4 balls', () => {
    const dashboardComponent = rtl.render(<Dashboard />);
    const displayComponent = rtl.render(<Display balls={0} strikes={0}/>);
    const ballButton = dashboardComponent.getByTestId('ball-button');
    rtl.fireEvent.click(ballButton);
    rtl.fireEvent.click(ballButton);
    rtl.fireEvent.click(ballButton);
    const ballCount = displayComponent.getByTestId('ball-count');
    const expected = 'Balls: 0';
    expect(ballCount).toHaveTextContent(expected);
  });

  it('should update "Display" with "Strikes: 1" when strike button is clicked once', () => {
    const dashboardComponent = rtl.render(<Dashboard />);
    const displayComponent = rtl.render(<Display balls={1} strikes={1} />);
    const strikeButton = dashboardComponent.getByTestId('strike-button');
    rtl.fireEvent.click(strikeButton);
    const strikeCount = displayComponent.getByTestId('strike-count');
    const expected = 'Strikes: 1';
    expect(strikeCount).toHaveTextContent(expected);
  });

  it('should reset the strike count to 0 when the player reaches 3 strikes', () => {
    const dashboardComponent = rtl.render(<Dashboard />);
    const displayComponent = rtl.render(<Display balls={1} strikes={0}/>);
    const strikeButton = dashboardComponent.getByTestId('strike-button');
    rtl.fireEvent.click(strikeButton);
    rtl.fireEvent.click(strikeButton);
    const strikeCount = displayComponent.getByTestId('strike-count');
    const expected = 'Strikes: 0';
    expect(strikeCount).toHaveTextContent(expected);
  });
});

