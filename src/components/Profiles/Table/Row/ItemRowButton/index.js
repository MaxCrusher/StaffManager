import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemRowButton extends Component {
  render = () => {
    if (this.props.content === 'enabled') {
      return (
        <p className="boss-table__text">
          <button className="boss-button boss-button_type_small boss-button_role_enabled boss-button_type_no-behavior">
            Enabled
          </button>
        </p>
      );
    }
    return (
      <p className="boss-table__text">
        <button className="boss-button boss-button_type_small boss-button_role_disabled boss-button_type_no-behavior">
          Disabled
        </button>
      </p>
    );
  };
}
export default ItemRowButton;

ItemRowButton.propTypes = {
  content: PropTypes.string.isRequired,
};
