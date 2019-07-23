import React from 'react';

const InputPanel = ({ changeHandler, num1, num2 }) => {
  return (
    <form className="calcInputs">
      <input
        name="num1"
        type="number"
        onChange={changeHandler}
        value={num1}
        placeholder="xx"
      />
      <input
        name="num2"
        type="number"
        onChange={changeHandler}
        value={num2}
        placeholder="xx"
      />
    </form>
  );
}

export default InputPanel;