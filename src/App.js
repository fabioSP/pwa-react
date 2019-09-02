import React, { Component } from 'react';
import './App.css';
import Home from './components/home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  };

  toggleBanner() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div id="App">
        <Home/>
      </div>
    );
  }
}

export default App;
