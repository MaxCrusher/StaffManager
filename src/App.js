import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Profiles from './components/Profiles';
import DetailProfile from './components/DetailProfile';
import './App.css';

class App extends Component {
  render = () => (
    <Router>
      <div className="App">
        <Route path="/" component={Header} />
        <Main />
      </div>
    </Router>
  );
}

export default App;
