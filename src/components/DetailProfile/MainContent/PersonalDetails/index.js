import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PersonalDetails extends Component {
  render = () => (
    <div className="boss-page-main__isle">
      <section className="boss-details">
        <p className="boss-details__pointer">
          <span className="boss-details__pointer-text">3</span>
        </p>
        <div className="boss-details__content">
          <h3 className="boss-details__title">Personal Details</h3>
          <ul className="boss-details__list">
            <li className="boss-details__item">
              <p className="boss-details__label">Name</p>
              <p className="boss-details__value">{this.props.content.name}</p>
            </li>
            <li className="boss-details__item">
              <p className="boss-details__label">Gender</p>
              <p className="boss-details__value">{this.props.content.gender}</p>
            </li>
            <li className="boss-details__item">
              <p className="boss-details__label">Date of Birth</p>
              <p className="boss-details__value">{this.props.content.dateOfBirth}</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
export default PersonalDetails;
PersonalDetails.propTypes = {
  content: PropTypes.object.isRequired,
};
