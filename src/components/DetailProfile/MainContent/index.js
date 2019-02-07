import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
          <EmploymentDetails content={this.props.employmentDetail} id={this.props.id} />
          <AccountDetails content={this.props.accountDetail} />
          <PersonalDetails content={this.props.personalDetail} />
          <ContactDetails content={this.props.contactDetail} />
          <MobileApps content={this.props.mobileApp} />
          <RevisionsHistory />
        </div>
      </div>
    </div>
  );
}
export default MainContent;
MainContent.propTypes = {
  id: PropTypes.number.isRequired,
  employmentDetail: PropTypes.object.isRequired,
  accountDetail: PropTypes.object.isRequired,
  personalDetail: PropTypes.object.isRequired,
  contactDetail: PropTypes.object.isRequired,
  mobileApp: PropTypes.object.isRequired,
};
