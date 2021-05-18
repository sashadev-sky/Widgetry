import React from 'react';

export const ButtonPanel = ({ clickHandler }) => {
  return (
    <div className='buttons'>
      <button name='multiplication' onClick={clickHandler}>*</button>
      <button name='division' onClick={clickHandler}>/</button>
      <button name='addition' onClick={clickHandler}>+</button>
      <button name='subtraction' onClick={clickHandler}>-</button>
    </div>
  );
};
