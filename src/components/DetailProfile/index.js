import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DetailProfileHeader from './DetailProfileHeader';
import MainContent from './MainContent';
import { getDetailProfile } from '../selector';
import { fetchDetailProfile } from '../../actions';

class DetailProfile extends Component {
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
        <DetailProfileHeader
          id={this.props.detailProfile.id}
          img={this.props.detailProfile.img}
          name={this.props.detailProfile.personalDetail.name}
          email={this.props.detailProfile.contactDetail.email}
          phone={this.props.detailProfile.contactDetail.phone}
          jobType={this.props.detailProfile.employmentDetail.jobType}
          mainVenue={this.props.detailProfile.employmentDetail.mainVenue}
        />
        <MainContent
          id={this.props.detailProfile.id}
          employmentDetail={this.props.detailProfile.employmentDetail}
          accountDetail={this.props.detailProfile.accountDetail}
          personalDetail={this.props.detailProfile.personalDetail}
          contactDetail={this.props.detailProfile.contactDetail}
          mobileApp={this.props.detailProfile.mobileApp}
        />
      </main>
    );
  };
}

const mapStateToProps = state => {
  return {
    detailProfile: getDetailProfile(state),
    id: state.detailProfile.staffMember.id,
    isLoading: state.detailProfile.isLoading,
  };
};

const mapDispatchToProps = {
  getDetailProfile: fetchDetailProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailProfile);

DetailProfile.propTypes = {
  getDetailProfile: PropTypes.func.isRequired,
  detailProfile: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
