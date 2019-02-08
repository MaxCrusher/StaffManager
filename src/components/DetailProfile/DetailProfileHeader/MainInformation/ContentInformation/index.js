import React, { Component } from 'react';
import PropTypes from 'prop-types';

const mailto = 'mailto:';
const tel = 'tel:';

class ContentInformation extends Component {
  render = () => (
    <div className="boss-user-summary__content">
      <div className="boss-user-summary__header">
        <h2 className="boss-user-summary__name">{this.props.name}</h2>
        <span
          className="boss-button boss-button_type_small boss-button_type_no-behavior boss-user-summary__label"
          style={{ backgroundColor: '#f0af84' }}
        >
          {this.props.jobType.name}
        </span>
      </div>
      <div className="boss-user-summary__contacts">
        <a href={mailto + this.props.email} className="boss-user-summary__link boss-user-summary__link_role_email">
          {this.props.email}
        </a>
        <a href={tel + this.props.phone} className="boss-user-summary__link boss-user-summary__link_role_phone">
          {this.props.phone}
        </a>
      </div>
      <ul className="boss-user-summary__review-list">
        <li className="boss-user-summary__review-item boss-user-summary__review-item_role_venue">
          <span className="boss-user-summary__review-marked">{this.props.mainVenue.name}</span>
        </li>
      </ul>
    </div>
  );
}
export default ContentInformation;
ContentInformation.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  jobType: PropTypes.string.isRequired,
  mainVenue: PropTypes.string.isRequired,
};
