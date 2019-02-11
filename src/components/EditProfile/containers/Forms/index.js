import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import router from '../../../../route';

class Forms extends Component {
  render = () => {
    const route = router
      .filter(elem => elem.path === '/detail/:id/edit')[0]
      .routes.map((elem, i) => (
        <Route key={elem.path + i} path={elem.path} exact={elem.exact} component={elem.component} />
      ));
    console.log(route);
    return (
      <Switch>
        <section className="boss-content-switcher__chapters">{route}</section>
      </Switch>
    );
  };
}
export default Forms;
// <Route path={elem.path} exact={elem.exact} component={elem.component} />
