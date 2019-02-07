import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render = () => (
    <header className="boss-page-header">
      <div className="boss-page-header__inner">
        <div className="boss-page-header__group boss-page-header__group_role_logo">
          <Link className="boss-page-header__logo" to="/">
            Boss
          </Link>
        </div>

        <a href="#" className="boss-page-header__action boss-page-header__action_role_search" data-dropdown="search">
          Search
        </a>

        <a href="#" className="boss-page-header__action boss-page-header__action_role_profile" data-dropdown="profile">
          Profile
        </a>
      </div>
    </header>
  );
}
export default Header;
