import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Profiles from './components/Profiles';
import DetailProfile from './components/DetailProfile';
import router from './route';
import './App.css';

class App extends Component {
  render = () => {
    console.log('+');
    const route = router.map((elem, i) => (
      <Route key={i} path={elem.path} exact={elem.exact} component={elem.component} />
    ));

    return (
      <Router>
        <div className="App">{route}</div>
      </Router>
    );
  };
}

export default App;
