import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AccountDetails extends Component {
  render = () => (
    <div className="boss-page-main__isle">
      <section className="boss-details">
        <p className="boss-details__pointer">
          <span className="boss-details__pointer-text">6</span>
        </p>
        <div className="boss-details__content">
          <h3 className="boss-details__title">Revisions History</h3>
          <ul className="boss-details__list">
            <li className="boss-details__item">
              <button className="boss-button boss-button_role_view-history boss-button_type_small">View History</button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
export default AccountDetails;
