import React, { Component } from 'react';
import PropTypes from 'prop-types';

const space = '/';
class EmploymentDetails extends Component {
  render = () => (
    <div className="boss-page-main__isle">
      <section className="boss-details">
        <p className="boss-details__pointer">
          <span className="boss-details__pointer-text">1</span>
        </p>
        <div className="boss-details__content">
          <h3 className="boss-details__title">Employment Details</h3>
          <ul className="boss-details__list">
            <li className="boss-details__item">
              <p className="boss-details__label">Main Venue</p>
              <p className="boss-details__value">{this.props.content.mainVenue.name}</p>
            </li>
            <li className="boss-details__item">
              <p className="boss-details__label">Other Venues</p>
              <p className="boss-details__value">{this.props.content.otherVenue.map(elem => elem.name + space)}</p>
            </li>
            <li className="boss-details__item">
              <p className="boss-details__label">Job Type</p>
              <p className="boss-details__value">{this.props.content.jobType.name}</p>
            </li>
            <li className="boss-details__item">
              <p className="boss-details__label">Start Date</p>
              <p className="boss-details__value">{this.props.content.startDate}</p>
            </li>
            <li className="boss-details__item">
              <p className="boss-details__label">Pay Rate</p>
              <p className="boss-details__value">{this.props.content.payRate.name}</p>
            </li>
            <li className="boss-details__item">
              <p className="boss-details__label">Hour Preference</p>
              <p className="boss-details__value">{this.props.content.hourPreference}</p>
            </li>
            <li className="boss-details__item">
              <p className="boss-details__label">Day Preference</p>
              <p className="boss-details__value">{this.props.content.dayPreference}</p>
            </li>
            <li className="boss-details__item">
              <p className="boss-details__label">National Insurance Number</p>
              <p className="boss-details__value">{this.props.content.nationalInsuranceNumber}</p>
            </li>
            <li className="boss-details__item">
              <p className="boss-details__label">Sage ID</p>
              <p className="boss-details__value">{this.props.content.sageId}</p>
            </li>
            <li className="boss-details__item">
              <p className="boss-details__label">Status Statement</p>
              <p className="boss-details__value">{this.props.content.statusStatement}</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
export default EmploymentDetails;
EmploymentDetails.propTypes = {
  content: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};
