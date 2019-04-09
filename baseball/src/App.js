import React, { Component } from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balls: 0,
      strikes: 0,
    }
  }

  handleStrike = () => {
    if (this.state.strikes < 2) {
      this.setState(prevState => {
        return { strikes: prevState.strikes + 1 }
      });
    } else {
      this.resetCount();
    }
  };

  handleBall = () => {
    if (this.state.balls < 3) {
      this.setState(prevState => {
        return { balls: prevState.balls + 1 }
      });
    } else {
      this.resetCount();
    }
  };

  resetCount = () => {
    this.setState({
      balls: 0,
      strikes: 0,
    })
  };

  handleFoul = () => {
    if (this.state.strikes === 0) {
      this.setState(prevState => {
        return { strikes: prevState.strikes + 1 }
      });
    }
    if (this.state.strikes === 1) {
      this.setState(prevState => {
        return { strikes: prevState.strikes + 1 }
      });
    }
    if (this.state.strikes === 2) {
      this.setState(prevState => {
        return { strikes: prevState.strikes }
      });
    }
  };

  handleHit = () => {
    this.setState({
      balls: 0,
      strikes: 0,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Let's play a game!</h1>
        <Display
          balls={this.state.balls}
          strikes={this.state.strikes}
        />
        <Dashboard
          handleStrike={this.handleStrike}
          handleBall={this.handleBall}
          handleFoul={this.handleFoul}
          handleHit={this.handleHit}
          resetCount={this.resetCount}
        />
      </div>
    );
  }
}

export default App;
