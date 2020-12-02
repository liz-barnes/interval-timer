import React, { Component } from 'react';

export default class TimerClock extends Component {
  state = {
    interval: {},
    worktime: 0,
    resttime: 0,
    rounds: 0,
  };

  render() {
    return (
      <div className='timer-container'>
        <div className="d-flex flex-wrap justify-content-center mt-5">
          <input type="text" name="worktime" placeholder="work time" value=""/>
          <input type="text" name="resttime" placeholder="rest time" value=""/>
          <input type="text" name="rounds" placeholder="rounds" value=""/>
        </div>
        <div className="d-flex flex-wrap justify-content-center mt-3">
          <button className="clock-btn mx-4">Start</button>
          <button className="clock-btn mx-4">Stop</button>
          <button className="clock-btn mx-4">Reset</button>
        </div>
      </div>
    );
  }
}
