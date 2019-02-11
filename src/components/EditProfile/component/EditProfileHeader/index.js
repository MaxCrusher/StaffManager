import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditProfileHeader extends Component {
  render = () => (
    <div className="boss-page-main__dashboard">
      <div className="boss-page-main__inner">
        <div className="boss-page-dashboard boss-page-dashboard_updated boss-page-dashboard_page_profile-edit">
          <div className="boss-page-dashboard__group">
            <h1 className="boss-page-dashboard__title">Edit Profile</h1>
            <div className="boss-page-dashboard__buttons-group boss-page-dashboard__buttons-group_position_last">
              <a href="#" className="boss-button boss-button_role_cancel boss-page-dashboard__button">
                Cancel Editing
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditProfileHeader;
