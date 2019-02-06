import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemRow extends Component {
  render = () => (
    <p className="boss-table__text">
      <a href="#" className="boss-table__link">
        {this.props.content}
      </a>
    </p>
  );
}
export default ItemRow;

ItemRow.propTypes = {
  content: PropTypes.string.isRequired,
};
