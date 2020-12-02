import React, { Component } from 'react';
import TimerClock from '../components/TimerClock';

export default class Timer extends Component {
  state = {};

  render() {
    return (
        <div>
          <h1 className="mt-5">Timer</h1>
          <TimerClock />
        </div>
    );
  }
}
