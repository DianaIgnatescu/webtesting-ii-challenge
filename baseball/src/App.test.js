import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import App from './App';

afterEach(rtl.cleanup);

describe('<App />', () => {
  it('should render without crashing', () => {
    rtl.render(<App />);
  });

});
