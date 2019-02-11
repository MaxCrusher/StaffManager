import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MenuButton extends Component {
  render = () => (
    <div className="boss-page-dashboard__switches">
      <a
        href="#"
        className="boss-button boss-button_type_small boss-button_role_profile boss-button_state_active boss-page-dashboard__switch"
      >
        Profile
      </a>
      <a href="#" className="boss-button boss-button_type_small boss-button_role_holidays boss-page-dashboard__switch">
        Holidays
      </a>
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
