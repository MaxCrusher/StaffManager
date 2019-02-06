import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemRowButton from './ItemRowButton';
import ItemRow from './ItemRow';
import ItemRowImage from './ItemRowImage';

class Row extends Component {
  render = () => (
    <div className="boss-table__row">
      <div className="boss-table__cell">
        <ItemRowImage />
      </div>
      <div className="boss-table__cell">
        <div className="boss-table__info">
          <p className="boss-table__label">Name</p>
          <ItemRow content={this.props.profile.name} />
        </div>
      </div>
      <div className="boss-table__cell">
        <div className="boss-table__info">
          <p className="boss-table__label">Modified</p>
          <ItemRow content={this.props.profile.modifided} />
        </div>
      </div>
      <div className="boss-table__cell">
        <div className="boss-table__info">
          <p className="boss-table__label">Status</p>
          <ItemRowButton content={this.props.profile.status} />
        </div>
      </div>
      <div className="boss-table__cell">
        <div className="boss-table__info">
          <p className="boss-table__label">Type</p>
          <ItemRow content={this.props.profile.type} />
        </div>
      </div>
      <div className="boss-table__cell">
        <div className="boss-table__info">
          <p className="boss-table__label">Master Venue</p>
          <ItemRow content={this.props.profile.masterVenue} />
        </div>
      </div>
      <div className="boss-table__cell">
        <div className="boss-table__info">
          <p className="boss-table__label">Work Venues</p>
          <ItemRow content={this.props.profile.workVenue} />
        </div>
      </div>
    </div>
  );
}
export default Row;
Row.propTypes = {
  profile: PropTypes.object.isRequired,
};
