import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemRowButton from './ItemRowButton';
import ItemRow from './ItemRow';
import ItemRowImage from './ItemRowImage';

const space = ' ';
class Row extends Component {
  render = () => {
    console.log(this.props);
    return (
      <div className="boss-table__row">
        <div className="boss-table__cell">
          <ItemRowImage content={this.props.profile.avatarUrl} id={this.props.profile.id} />
        </div>
        <div className="boss-table__cell">
          <div className="boss-table__info">
            <p className="boss-table__label">Name</p>
            <ItemRow content={this.props.profile.firstName + space + this.props.profile.surname} />
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
            <ItemRow content={this.props.profile.staffTypes} />
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
            <ItemRow content={this.props.profile.venue.name} />
          </div>
        </div>
      </div>
    );
  };
}
export default Row;
Row.propTypes = {
  profile: PropTypes.object.isRequired,
  staffTypes: PropTypes.string.isRequired,
};
