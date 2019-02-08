import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactDetails extends Component {
  render = () => (
    <div className="boss-page-main__isle">
      <section className="boss-details">
        <p className="boss-details__pointer">
          <span className="boss-details__pointer-text">4</span>
        </p>
        <div className="boss-details__content">
          <h3 className="boss-details__title">Contact Details</h3>
          <ul className="boss-details__list">
            <li className="boss-details__item">
              <p className="boss-details__label boss-details__label_size_small">Email Address</p>
              <p className="boss-details__value">{this.props.content.email}</p>
            </li>
            <li className="boss-details__item">
              <p className="boss-details__label boss-details__label_size_small">Phone Number</p>
              <p className="boss-details__value">{this.props.content.phone}</p>
            </li>
            <li className="boss-details__item">
              <p className="boss-details__label boss-details__label_size_small">Address</p>
              <p className="boss-details__value">
                <span className="boss-details__value-line">{this.props.content.address}</span>
                <span className="boss-details__value-line">{this.props.content.country}</span>
                <span className="boss-details__value-line">{this.props.content.county}</span>
                <span className="boss-details__value-line">{this.props.content.postcode}</span>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
export default ContactDetails;
ContactDetails.propTypes = {
  content: PropTypes.object.isRequired,
  address: PropTypes.object.isRequired,
};
