import React from 'react';

const Dashboard = (props) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <button data-testid="strike-button" onClick={props.handleStrike}>Strike</button>
      <button data-testid="ball-button" onClick={props.handleBall}>Ball</button>
      <button data-testid="foul-button" onClick={props.handleFoul}>Foul</button>
      <button data-testid="hit-button" onClick={props.handleHit}>Hit</button>
    </div>
  );
};


export default Dashboard;
