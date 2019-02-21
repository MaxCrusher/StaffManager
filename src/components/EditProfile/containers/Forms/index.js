import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import router from '../../../../route';

class Forms extends Component {
  render = () => {
    const route = router
      .filter(elem => elem.path === '/detail/:id/edit')[0]
      .routes.map((elem, i) => (
        <Route key={elem.path + i} path={elem.path} exact={elem.exact} component={elem.component} />
      ));
    return (
      <Switch>
        <section className="boss-content-switcher__chapters">{route}</section>
      </Switch>
    );
  };
}
export default Forms;
