import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EditProfileHeader from './component/EditProfileHeader';
import SwitchSection from './component/SwitchSection';
import Forms from './containers/Forms';

class EditProfile extends Component {
  render = () => {
    console.log(this.props.id);
    return (
      <main className="boss-page-main">
        <EditProfileHeader />
        <div className="boss-page-main__content">
          <div className="boss-page-main__inner">
            <div className="boss-content-switcher">
              <div className="boss-content-switcher__inner">
                <SwitchSection id={this.props.id} />
                <Forms />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  };
}
const mapStateToProps = state => ({
  id: state.detailProfile.staffMember.id,
});
export default connect(mapStateToProps)(EditProfile);
EditProfile.propTypes = {
  id: PropTypes.number.isRequired,
};
