import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { numProfile } from '../../selector';

class ProfilesHeader extends Component {
  render = () => (
    <div className="boss-page-main__dashboard">
      <div className="boss-page-main__inner">
        <div className="boss-page-dashboard boss-page-dashboard_updated boss-page-dashboard_page_staff-members-index">
          <div className="boss-page-dashboard__group">
            <h1 className="boss-page-dashboard__title">
              <span className="boss-page-dashboard__title-text">Staff Members</span>
              <span className="boss-page-dashboard__title-info">+ {this.props.numProfile}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  numProfile: numProfile(state),
});
export default connect(mapStateToProps)(ProfilesHeader);
ProfilesHeader.propTypes = {
  numProfile: PropTypes.number.isRequired,
};
