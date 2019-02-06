import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainInformation from './MainInformation';
import MenuButton from './MenuButton';

class DetailProfileHeader extends Component {
  render = () => (
    <div className="boss-page-main__dashboard">
      <div className="boss-page-main__inner">
        <div className="boss-page-dashboard boss-page-dashboard_updated boss-page-dashboard_page_profile">
          <MainInformation />
          <MenuButton />
        </div>
      </div>
    </div>
  );
}
export default DetailProfileHeader;
