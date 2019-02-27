import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import Button from './Button';
import ContentInformation from './ContentInformation';
import ModalDisable from './ModalDisable';

class MainInformation extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => {
    console.log('object');
    this.setState({ isOpen: true });
  };

  closeModal = () => this.setState({ isOpen: false });

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
        <Button type="edit" id={this.props.id} />
        <Button type="disable" id={this.props.id} openModal={this.openModal} />
      </div>
      <ModalDisable name="disable" label="Disable" isOpen={this.state.isOpen} closeModal={this.closeModal} />
    </div>
  );
}
export default MainInformation;
MainInformation.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  jobType: PropTypes.object.isRequired,
  mainVenue: PropTypes.object.isRequired,
};
