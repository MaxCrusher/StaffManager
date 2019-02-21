import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Button extends Component {
  render = () => {
    if (this.props.type === 'edit') {
      return (
        <Link
          to={'/detail/'.concat(this.props.id, '/edit/employment')}
          className="boss-button boss-button_role_edit boss-page-dashboard__button"
        >
          Edit Profile
        </Link>
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
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
