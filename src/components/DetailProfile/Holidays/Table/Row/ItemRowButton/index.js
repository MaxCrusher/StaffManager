import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemRowButton extends Component {
  render = () => {
    console.log('object');
    return (
      <div className="boss-table__cell">
        <div className="boss-table__info">
          <p className="boss-table__label">Action</p>
          <div className="boss-table__actions">
            <a href="#" className="boss-button boss-button_type_small boss-button_role_update boss-table__action">
              Edit
            </a>
            <a href="#" className="boss-button boss-button_type_small boss-button_role_cancel boss-table__action">
              Delete
            </a>
          </div>
        </div>
      </div>
    );
  };
}

export default ItemRowButton;
