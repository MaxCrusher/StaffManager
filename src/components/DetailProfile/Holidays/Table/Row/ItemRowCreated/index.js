import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemRowCreated extends Component {
  render = () => (
    <div className="boss-table__cell">
      <div className="boss-table__info">
        <p className="boss-table__label">Created</p>
        <div className="boss-table__info-group">
          <p className="boss-table__text">
            <span className="boss-table__text-line">
              <span className="boss-table__text-label">Requested: </span> {this.props.user}
            </span>
            <span className="boss-table__text-meta">{this.props.date}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default ItemRowCreated;
ItemRowCreated.propTypes = {
  user: PropTypes.string.isRequired,
  date: PropTypes.string,
};
