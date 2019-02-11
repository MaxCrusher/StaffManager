import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as constUrl from '../../../../pathURL';

class SwitchSection extends Component {
  changeClass = e => {
    const mas = document.getElementsByClassName('boss-content-switcher__nav-link');
    Array.from(mas).map(elem => {
      if (e.target.id === elem.id) {
        return elem.classList.add('boss-content-switcher__nav-link_state_active');
      }
      return elem.classList.remove('boss-content-switcher__nav-link_state_active');
    });
  };

  render = () => (
    <aside className="boss-content-switcher__side">
      <nav className="boss-content-switcher__nav">
        <Link
          to={constUrl.detailURL.concat('/', this.props.id, constUrl.editURL, constUrl.employmentURL)}
          className="boss-content-switcher__nav-link boss-content-switcher__nav-link_state_active"
          data-chapter="employment"
          id="employment"
          onClick={this.changeClass}
        >
          Employment Details
        </Link>
        <Link
          to={constUrl.detailURL.concat('/', this.props.id, constUrl.editURL, constUrl.personalURL)}
          className="boss-content-switcher__nav-link"
          id="personal"
          data-chapter="personal"
          onClick={this.changeClass}
        >
          Personal Details
        </Link>
        <Link
          to={constUrl.detailURL.concat('/', this.props.id, constUrl.editURL, constUrl.contactURL)}
          className="boss-content-switcher__nav-link"
          id="contact"
          data-chapter="contact"
          onClick={this.changeClass}
        >
          Contact Details
        </Link>
      </nav>
    </aside>
  );
}
export default SwitchSection;
SwitchSection.propTypes = {
  id: PropTypes.number.isRequired,
};
