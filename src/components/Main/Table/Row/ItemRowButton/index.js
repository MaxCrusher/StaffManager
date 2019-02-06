import React, { Component } from 'react';
import PropTypes from 'prop-types';
import button from './Button';

class ItemRowButton extends Component {
  render = () => (
    <div className="boss-table__cell">
      <div className="boss-table__info">
        <p className="boss-table__label">{this.props.name}</p>
        <p className="boss-table__text">{button(this.props.content)}</p>
      </div>
    </div>
  );
}
export default ItemRowButton;

ItemRowButton.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
