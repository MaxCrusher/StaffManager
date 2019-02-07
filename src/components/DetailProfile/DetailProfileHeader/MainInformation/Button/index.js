import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render = () => {
    if (this.props.type === 'edit') {
      return (
        <a href="#" className="boss-button boss-button_role_edit boss-page-dashboard__button">
          Edit Profile
        </a>
      );
    }
    return (
      <a href="#" className="boss-button boss-button_role_block boss-page-dashboard__button">
        Disable Staff Member
      </a>
    );
  };
}
export default Button;
Button.propTypes = {
  type: PropTypes.string.isRequired,
};
