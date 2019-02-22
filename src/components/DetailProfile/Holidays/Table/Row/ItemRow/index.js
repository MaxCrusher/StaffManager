import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ItemRow extends Component {
  render = () => {
    console.log('object');
    const statusP = <p className="boss-table__text boss-table__text_role_pending-status">{this.props.text}</p>;
    const dateP = (
      <p className="boss-table__text">
        {this.props.startDate}
        <br />
        {this.props.endDate}
      </p>
    );
    return (
      <div className="boss-table__cell">
        <div className="boss-table__info">
          <p className="boss-table__label">{this.props.label}</p>
          {this.props.name === 'date' ? (
            dateP
          ) : (
            <p className="boss-table__text">{this.props.name === 'status' ? statusP : this.props.text}</p>
          )}
        </div>
      </div>
    );
  };
}

export default ItemRow;
ItemRow.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
};
