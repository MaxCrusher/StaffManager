import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AccountDetails extends Component {
  render = () => (
    <div className="boss-page-main__isle">
      <section className="boss-details">
        <p className="boss-details__pointer">
          <span className="boss-details__pointer-text">2</span>
        </p>
        <div className="boss-details__content">
          <h3 className="boss-details__title">Account Details</h3>
          <ul className="boss-details__list">
            <li className="boss-details__item">
              <p className="boss-details__label boss-details__label_size_small">Created</p>
              <p className="boss-details__value">{this.props.content.created}</p>
            </li>
            <li className="boss-details__item">
              <p className="boss-details__label boss-details__label_size_small">Status</p>
              <p className="boss-details__value">{this.props.content.status ? 'Disable' : 'Enable'}</p>
            </li>
            <li className="boss-details__item">
              <p className="boss-details__label boss-details__label_size_small">User</p>
              <p className="boss-details__value">{this.props.content.user}</p>
            </li>
            <li className="boss-details__item">
              <p className="boss-details__label boss-details__label_size_small">Application Password</p>
              <p className="boss-details__value">
                <span className="boss-details__value-line">{this.props.content.applicationPassword}</span>
              </p>
            </li>
            <li className="boss-details__item">
              <p className="boss-details__label boss-details__label_size_small">ID Scanner App Guid</p>
              <p className="boss-details__value">
                <img src={this.props.content.idScanner} alt="qr code preview" className="boss-details__qr" />
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
export default AccountDetails;
AccountDetails.propTypes = {
  content: PropTypes.object.isRequired,
};
