import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Profiles from './components/Profiles';
import DetailProfile from './components/DetailProfile';
import './App.css';

class App extends Component {
  render = () => (
    <Router>
      <div className="App">
        <Route path="/" component={Header} />
        <main className="boss-page-main">
          <Route exact path="/" component={Profiles} />
          <Route exact path="/detail/:id" component={DetailProfile} />
        </main>
      </div>
    </Router>
  );
}

export default App;
