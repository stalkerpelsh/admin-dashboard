import React, { Component } from 'react';
import AppRouting from '../AppRouting';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <AppRouting />
      </>
    );
  }
}

export default App;
