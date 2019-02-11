import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MobileDetails extends Component {
  render = () => (
    <div className="boss-page-main__isle">
      <section className="boss-details">
        <p className="boss-details__pointer">
          <span className="boss-details__pointer-text">5</span>
        </p>
        <div className="boss-details__content">
          <h3 className="boss-details__title">Mobile Apps</h3>
          <ul className="boss-details__list">
            <li className="boss-details__item">
              <p className="boss-details__label">Some App</p>
              <p className="boss-details__value">
                <span className="boss-details__value-line">
                  <a href="#" className="boss-details__value-action">
                    Send download email
                  </a>
                </span>
                <span className="boss-details__value-line">Last sent at {this.props.content.lastEntry}</span>
              </p>
            </li>
            <li className="boss-details__item">
              <p className="boss-details__label">Other App</p>
              <p className="boss-details__value">
                <span className="boss-details__value-line">
                  <a href="#" className="boss-details__value-action">
                    Send download email
                  </a>
                </span>
              </p>
            </li>
            <li className="boss-details__item">
              <p className="boss-details__label">Another App</p>
              <p className="boss-details__value">
                <span className="boss-details__value-line">
                  <a href="#" className="boss-details__value-action">
                    Send download email
                  </a>
                </span>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
export default MobileDetails;
MobileDetails.propTypes = {
  content: PropTypes.object.isRequired,
};
