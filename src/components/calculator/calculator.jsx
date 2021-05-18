import React from 'react';

import { InputPanel } from './inputPanel'
import { ButtonPanel } from './buttonPanel';
import { calculate } from '../../util/calculate';

import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      num1: '',
      num2: '',
      tooltipVal: '',
      tooltipDisplay: 'none'
    };
  }

  setNums = (e) => {
    let name = e.currentTarget.name;
    this.setState({ [name]: e.currentTarget.value });
  }

  calcResult = (e) => {
    let name = e.currentTarget.name;
    let calresult = calculate(this.state.num1, this.state.num2, name)
    let result = `${calresult.result}`;
    if (result.length > 12) {
      this.setState({ tooltipVal: result, tooltipDisplay: 'block' })
      calresult.result = `${result.slice(0,12)}...`
    } else {
      this.setState({ tooltipVal: result, tooltipDisplay: 'none' })
    }
    this.setState(calresult);
  }

  clearInput = (e) => {
    e.preventDefault();
    this.setState({ num1: '', num2: '', result: '', tooltip: '' });
  }

  render() {
    const { num1, num2, result, tooltipDisplay, tooltipVal } = this.state;
    return (
      <div className='calcComponent'>
        <div className='calculator'>
          <div className='output-con'>
          <p className="output">{result}
            <span
              className='tooltiptext'
              style={{display: `${tooltipDisplay}`}}>
              {tooltipVal}
            </span>
          </p>
          <InputPanel
            changeHandler={this.setNums}
            num1={num1}
            num2={num2}
          />
          <ButtonPanel clickHandler={this.calcResult} />
          <button
            className='resetButton'
            name='clear'
            onClick={this.clearInput}
            aria-label='clear'
          >
            AC
          </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
