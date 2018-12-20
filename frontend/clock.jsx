import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  /**
   *  store that interval's id so you can cancel it in componentWillUnmount
   *
   */
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    return <div>
        <h1>Clock</h1>
        <div className="clock">
          <p>Time:
          <span>{this.state.time.toLocaleTimeString()} EST</span>
          </p>
          <p>Date:
          <span>{this.state.time.toLocaleDateString()}</span>
          </p>
        </div>
      </div>;
  }
}

export default Clock;