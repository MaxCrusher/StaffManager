import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDetailProfile } from '../../selector';
import EmploymentDetails from './EmploymentDetails';
import AccountDetails from './AccountDetails';
import PersonalDetails from './PersonalDetails';
import ContactDetails from './ContactDetails';
import MobileApps from './MobileApps';
import RevisionsHistory from './RevisionsHistory';

class MainContent extends Component {
  render = () => (
    <div className="boss-page-main__content">
      <div className="boss-page-main__inner">
        <div className="boss-page-main__flow">
          <EmploymentDetails content={this.props.detailProfile.employmentDetail} id={this.props.id} />
          <AccountDetails content={this.props.detailProfile.accountDetail} />
          <PersonalDetails content={this.props.detailProfile.personalDetail} />
          <ContactDetails content={this.props.detailProfile.contactDetail} />
          <MobileApps content={this.props.detailProfile.mobileApp} />
          <RevisionsHistory />
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  detailProfile: getDetailProfile(state),
  id: state.detailProfile.staffMember.id,
  isLoading: state.detailProfile.isLoading,
});

export default connect(mapStateToProps)(MainContent);

MainContent.propTypes = {
  getDetailProfile: PropTypes.func.isRequired,
  detailProfile: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
