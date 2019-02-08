import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import Button from './Button';
import ContentInformation from './ContentInformation';

class MainInformation extends Component {
  render = () => (
    <div className="boss-page-dashboard__group">
      <div className="boss-page-dashboard__user-summary">
        <div className="boss-user-summary">
          <Avatar img={this.props.img} />
          <ContentInformation
            name={this.props.name}
            email={this.props.email}
            phone={this.props.phone}
            jobType={this.props.jobType}
            mainVenue={this.props.mainVenue}
          />
        </div>
      </div>
      <div className="boss-page-dashboard__buttons-group">
        <Button type="edit" />
        <Button type="disable" />
      </div>
    </div>
  );
}
export default MainInformation;
MainInformation.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  jobType: PropTypes.string.isRequired,
  mainVenue: PropTypes.string.isRequired,
};
