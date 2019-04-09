import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  return (
      <div>
        <h2>Score Board</h2>
        <div>Balls: {props.balls}</div>
        <div>Strikes: {props.strikes}</div>
      </div>
  )
};

Display.propTypes = {
  balls: PropTypes.number.isRequired,
  strikes: PropTypes.number.isRequired,
};

export default Display;
