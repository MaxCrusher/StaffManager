import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import logo from './download.jpeg';

class ItemRowImage extends Component {
  render = () => (
    <div className="boss-table__image">
      <a href="#" className="boss-table__link">
        <div className="boss-avatar boss-avatar_type_combined">
          <img src={logo} alt="" className="boss-avatar__image" />
        </div>
      </a>
    </div>
  );
}
export default ItemRowImage;
