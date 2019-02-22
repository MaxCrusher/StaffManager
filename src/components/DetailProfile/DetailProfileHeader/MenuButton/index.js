import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const mas = document.getElementsByClassName('boss-button boss-button_type_small boss-page-dashboard__switch');
class MenuButton extends Component {
  componentDidMount = () => {
    const url = window.location.href.split('/');
    console.log(url);
    Array.from(mas).map(elem => {
      if (elem.id === url[5]) {
        return elem.classList.add('boss-button_state_active');
      }
      return elem.classList.remove('boss-button_state_active');
    });
  };

  changeActive = e => {
    Array.from(mas).map(elem => {
      if (elem.id === e.target.id) {
        return elem.classList.add('boss-button_state_active');
      }
      return elem.classList.remove('boss-button_state_active');
    });
  };

  render = () => (
    <div className="boss-page-dashboard__switches">
      <Link
        id="profile"
        to={'/detail/'.concat(this.props.id, '/profile')}
        onClick={this.changeActive}
        className="boss-button boss-button_type_small boss-button_role_profile boss-button_state_active boss-page-dashboard__switch"
      >
        Profile
      </Link>
      <Link
        id="holidays"
        to={'/detail/'.concat(this.props.id, '/holidays')}
        onClick={this.changeActive}
        className="boss-button boss-button_type_small boss-button_role_holidays boss-page-dashboard__switch"
      >
        Holidays
      </Link>
      <a href="#" className="boss-button boss-button_type_small boss-button_role_timelog boss-page-dashboard__switch">
        Owed hours
      </a>
      <a
        href="#"
        className="boss-button boss-button_type_small boss-button_role_accessories boss-page-dashboard__switch"
      >
        Accessories
      </a>
      <a href="#" className="boss-button boss-button_type_small boss-button_role_shifts boss-page-dashboard__switch">
        Shifts
      </a>
      <a href="#" className="boss-button boss-button_type_small boss-button_role_payments boss-page-dashboard__switch">
        Payments
      </a>
    </div>
  );
}
export default MenuButton;
MenuButton.propTypes = {
  id: PropTypes.number.isRequired,
};
