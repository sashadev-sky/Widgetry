import React from 'react';
import PropTypes from 'prop-types';


export const InputPanel = ({ changeHandler, num1, num2 }) => (
  <form className='calcInputs'>
    <input
      name='num1'
      onChange={changeHandler}
      placeholder='xx'
      type='number'
      value={num1}
    />
    <input
      name='num2'
      onChange={changeHandler}
      placeholder='xx'
      type='number'
      value={num2}
    />
  </form>
);

InputPanel.defaultProps = {
  num1: '',
  num2: ''
};

InputPanel.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  num1: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  num2: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
