import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import router from './route';

class App extends Component {
  render = () => {
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
