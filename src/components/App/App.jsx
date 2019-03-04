import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideBar from '../SideBar';
import Header from '../Header';
import Main from '../Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <>
          <SideBar />
          <div className="page-container">
            <Header />
            <Switch>
              <Route exact path="/" component={Main} />
            </Switch>
          </div>
        </>
      </Router>
    );
  }
}

export default App;
