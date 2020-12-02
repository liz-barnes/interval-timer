// import React, { Component } from 'react';

// export default class TimerClock extends Component {
//   state = {
//     interval: {},
//     worktime: 0,
//     resttime: 0,
//     rounds: 0,
//   };

//   render() {
//     return (
//       <div className='timer-container'>
//         <div className="d-flex flex-wrap justify-content-center mt-5">
//           <input type="text" name="worktime" placeholder="work time" value=""/>
//           <input type="text" name="resttime" placeholder="rest time" value=""/>
//           <input type="text" name="rounds" placeholder="rounds" value=""/>
//         </div>
//         <div className="d-flex flex-wrap justify-content-center mt-3">
//           <button className="clock-btn mx-4">Start</button>
//           <button className="clock-btn mx-4">Stop</button>
//           <button className="clock-btn mx-4">Reset</button>
//         </div>
//       </div>
//     );
//   }
// }

import React from 'react';

class Timer extends React.Component {
  state = {
    rounds: '',
    restTime: '',
    workTime: '',
    currentTime: '',
    isWork: true,
    currentRound: '',
    isStopped: false,
  };

  handleInputChange = (e) => {
    switch (e.target.id) {
      case 'rounds':
        this.setState({ rounds: e.target.value });
        this.setState({ currentRound: e.target.value });
        break;
      case 'workTime':
        this.setState({ workTime: e.target.value });
        this.setState({ currentTime: e.target.value });
        break;
      case 'restTime':
        this.setState({ restTime: e.target.value });
        break;
      default:
        this.manageInterval(e.target.id);
        break;
    }
  };

  manageInterval = (cmd) => {
    if (
      cmd === 'start' && this.state.currentTime >= 0 // Do we need this currentTime??
      && this.state.restTime > 0
      && this.state.rounds > 0
      && this.state.isWork
      // && this.state.isStopped === false
    ) {
      this.setState({ currentSetType: 'Work' });
      this.btn.setAttribute('disabled', 'disabled');
      this.timer = setInterval(() => {
        if (this.state.currentTime === 0) {
          if (this.state.isWork) {
            this.setState({ currentSetType: 'Rest' });
            this.setState({ currentTime: this.state.restTime });
          } else {
            this.setState({ currentSetType: 'Work' });
            this.setState({ currentTime: this.state.workTime });
            this.setState({ currentRound: this.state.currentRound - 1 });
            if (this.state.currentRound === 0) {
              clearInterval(this.timer);
              this.setState({
                rounds: this.state.rounds,
                restTime: this.state.restTime,
                workTime: this.state.workTime,
                currentTime: null,
                currentSetType: null,
                currentRound: null,
              });
              // Add banner 'WORKOUT COMPLETE'
            }
          }
          this.setState({ isWork: !this.state.isWork });
          return;
        }
        this.setState({ currentTime: this.state.currentTime - 1 });
      }, 1000);
    } else if (
      cmd === 'start'
      && this.state.isStopped === true
    ) {
      this.btn.setAttribute('disabled', 'disabled');
      this.timer = setInterval(() => {
        if (this.state.currentTime === 0) {
          if (this.state.isWork) {
            this.setState({ currentSetType: 'Rest' });
            this.setState({ currentTime: this.state.restTime });
          } else {
            this.setState({ currentSetType: 'Work' });
            this.setState({ currentTime: this.state.workTime });
            this.setState({ currentRound: this.state.currentRound - 1 });
            if (this.state.currentRound === 0) {
              clearInterval(this.timer);
              this.setState({
                rounds: this.state.rounds,
                restTime: this.state.restTime,
                workTime: this.state.workTime,
                currentTime: null,
                currentSetType: null,
                currentRound: null,
              });
              // Add banner 'WORKOUT COMPLETE'
            }
          }
          this.setState({ isWork: !this.state.isWork });
          return;
        }
        this.setState({ currentTime: this.state.currentTime - 1 });
      }, 1000);
      // what goes here lol
    } else if (cmd === 'stop') {
      clearInterval(this.timer);
      // this.setState({ isStopped: true });
      this.btn.removeAttribute('disabled', 'disabled');
    } else if (cmd === 'reset') {
      clearInterval(this.timer);
      this.setState({
        rounds: '',
        restTime: '',
        workTime: '',
        currentTime: '',
        currentSetType: '',
        currentRound: '',
        isStopped: false,
      });
    }
  };

  render() {
    return (
      <div>
        <div style={{ textAlign: 'center', marginTop: '15%' }}>
          Timer Display
          <div>Rounds: {this.state.rounds}</div>
          <div>Work Time: {this.state.workTime}</div>
          <div>Rest Time: {this.state.restTime}</div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '15%' }}>
          <div> Current Round: {this.state.currentRound}</div>
          <div> {this.state.currentSetType}</div>
          <div> Current Time: {this.state.currentTime}</div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '25%',
          }}
        >
          <div>
            <label htmlFor="rounds">Rounds:</label>
            <input
              onChange={this.handleInputChange}
              type="number"
              id="rounds"
              name="rounds"
              min="1"
              max="15"
              value={this.state.rounds}
            />
          </div>
          <div>
            <label htmlFor="workTime">Work Time (sec):</label>
            <input
              onChange={this.handleInputChange}
              type="number"
              id="workTime"
              name="workTime"
              min="1"
              max="360"
              value={this.state.workTime}
            />
          </div>
          <div>
            <label htmlFor="restTime">Rest Time (sec):</label>
            <input
              onChange={this.handleInputChange}
              type="number"
              id="restTime"
              name="restTime"
              min="1"
              max="360"
              value={this.state.restTime}
            />
          </div>
          <button
            id="start" onClick={this.handleInputChange}
            ref={(btn) => {
              this.btn = btn;
            }}>
            Start
          </button>
          <button id="stop" onClick={this.handleInputChange}>
            Stop
          </button>
          <button id="reset" onClick={this.handleInputChange}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
