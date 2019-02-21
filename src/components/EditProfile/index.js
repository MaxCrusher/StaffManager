import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';
import EditProfileHeader from './component/EditProfileHeader';
import SwitchSection from './component/SwitchSection';
import Forms from './containers/Forms';
import { getDetailProfile } from '../selector';
import { fetchDetailProfile } from '../../actions';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: true,
    };
  }

  componentDidMount() {
    if (this.props.isLoading) {
      this.props.getDetailProfile(this.props.match.params.id).then(() => this.setState({ initial: false }));
    } else if (Number(this.props.match.params.id) !== this.props.id) {
      this.props.getDetailProfile(this.props.match.params.id).then(() => this.setState({ initial: false }));
    } else {
      this.setState({ initial: false });
    }
  }

  render = () => {
    if (this.props.isLoading || this.state.initial) {
      return (
        <div className="centerSpiner">
          <Spinner style={{ width: '5rem', height: '5rem' }} color="primary" />
        </div>
      );
    }
    return (
      <main className="boss-page-main">
        <EditProfileHeader id={this.props.id} />
        <div className="boss-page-main__content">
          <div className="boss-page-main__inner">
            <div className="boss-content-switcher">
              <div className="boss-content-switcher__inner">
                <SwitchSection id={this.props.id} url={this.props.match.url} />
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
  detailProfile: getDetailProfile(state),
  isLoading: state.detailProfile.isLoading,
});

const mapDispatchToProps = {
  getDetailProfile: fetchDetailProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfile);

EditProfile.propTypes = {
  getDetailProfile: PropTypes.func.isRequired,
  detailProfile: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
