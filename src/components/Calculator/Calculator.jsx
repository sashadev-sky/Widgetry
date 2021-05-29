import React, { Component } from 'react';

import { InputPanel } from './InputPanel';
import { ButtonPanel } from './ButtonPanel';
import { calculate } from '../../util/calculate';

import './calculator.css';


export class Calculator extends Component {
  state = {
    result: '',
    num1: '',
    num2: '',
    tooltipVal: '',
    tooltipDisplay: 'none'
  };

  setNums = e => {
    const { name } = e.currentTarget;
    this.setState({ [name]: e.currentTarget.value });
  };

  calcResult = e => {
    const { name } = e.currentTarget;
    const calresult = calculate(this.state.num1, this.state.num2, name);
    const result = `${calresult.result}`;
    if (result.length > 12) {
      this.setState({ tooltipVal: result, tooltipDisplay: 'block' });
      calresult.result = `${result.slice(0, 12)}...`;
    } else {
      this.setState({ tooltipVal: result, tooltipDisplay: 'none' });
    }
    this.setState(calresult);
  };

  clearInput = e => {
    e.preventDefault();
    this.setState({
      num1: '',
      num2: '',
      result: ''
    });
  };

  render() {
    const {
      num1,
      num2,
      result,
      tooltipDisplay,
      tooltipVal
    } = this.state;
    return (
      <div className='calcComponent'>
        <div className='calculator'>
          <div className='output-con'>
            <p className='output'>
              {result}
              <span
                className='tooltiptext'
                style={{ display: `${tooltipDisplay}` }}
              >
                {tooltipVal}
              </span>
            </p>
            <InputPanel changeHandler={this.setNums} num1={num1} num2={num2} />
            <ButtonPanel clickHandler={this.calcResult} />
            <button
              aria-label='clear'
              className='resetButton'
              name='clear'
              onClick={this.clearInput}
              type='button'
            >
              AC
            </button>
          </div>
        </div>
      </div>
    );
  }
}
