import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profiles from '../Profiles';
import DetailProfile from '../DetailProfile';

class Main extends Component {
  render = () => (
    <Router>
      <div>
        <Route exact path="/" component={Profiles} />
        <Route exact path="/detail/:id" component={DetailProfile} />
      </div>
    </Router>
  );
}
export default Main;
