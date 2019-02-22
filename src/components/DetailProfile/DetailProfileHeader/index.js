import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainInformation from './MainInformation';
import MenuButton from './MenuButton';

class DetailProfileHeader extends Component {
  render = () => (
    <div className="boss-page-main__dashboard">
      <div className="boss-page-main__inner">
        <div className="boss-page-dashboard boss-page-dashboard_updated boss-page-dashboard_page_profile">
          <MainInformation
            id={this.props.id}
            img={this.props.img}
            name={this.props.name}
            email={this.props.email}
            phone={this.props.phone}
            jobType={this.props.jobType}
            mainVenue={this.props.mainVenue}
          />
          <MenuButton id={this.props.id} />
        </div>
      </div>
    </div>
  );
}
export default DetailProfileHeader;
DetailProfileHeader.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  jobType: PropTypes.object.isRequired,
  mainVenue: PropTypes.object.isRequired,
};
