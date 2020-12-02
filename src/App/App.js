import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import MyNavbar from '../components/Navbar';
import Routes from '../helpers/routes';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
        <MyNavbar />
        <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
