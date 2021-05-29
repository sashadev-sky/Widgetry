import React from 'react';
import PropTypes from 'prop-types';


export const ButtonPanel = ({ clickHandler }) => (
  <div className='buttons'>
    <button name='multiplication' onClick={clickHandler}>
      *
    </button>
    <button name='division' onClick={clickHandler}>
      /
    </button>
    <button name='addition' onClick={clickHandler}>
      +
    </button>
    <button name='subtraction' onClick={clickHandler}>
      -
    </button>
  </div>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired
};
