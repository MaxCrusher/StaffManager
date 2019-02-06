import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemRowImage from '../ItemRowImage';
import ItemRowButton from '../ItemRowButton';

class ItemRow extends Component {
  render = () => {
    if (this.props.name === 'img') {
      return <ItemRowImage />;
    }
    if (this.props.name === 'Status') {
      return <ItemRowButton content={this.props.content} name={this.props.name} />;
    }
    return (
      <div className="boss-table__cell">
        <div className="boss-table__info">
          <p className="boss-table__label">{this.props.name}</p>
          <p className="boss-table__text">
            <a href="#" className="boss-table__link">
              {this.props.content}
            </a>
          </p>
        </div>
      </div>
    );
  };
}
export default ItemRow;

ItemRow.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
