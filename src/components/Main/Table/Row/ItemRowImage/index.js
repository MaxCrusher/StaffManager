import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemRowImage extends Component {
  render = () => (
    <div className="boss-table__cell">
      <div className="boss-table__image">
        <a href="#" className="boss-table__link">
          <div className="boss-avatar boss-avatar_type_combined">
            <img src="./1.png" alt="" className="boss-avatar__image" />
          </div>
        </a>
      </div>
    </div>
  );
}
export default ItemRowImage;

ItemRowImage.propTypes = {
  name: PropTypes.string.isRequired,
};
