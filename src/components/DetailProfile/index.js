import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import DetailProfileHeader from './DetailProfileHeader';
import { getDetailProfile } from '../selector';
import { fetchDetailProfile } from '../../actions';
import router from '../../route';

class DetailProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: true,
    };
  }

  componentDidMount() {
    if (this.props.isLoading) {
      this.props
        .getDetailProfile(this.props.match.params.id)
        .then(response => this.setState({ initial: false }))
        .catch(e => {
          window.alert('Все очень плохо, ошибка сервера'.concat(e));
        });
    } else if (Number(this.props.match.params.id) !== this.props.id) {
      this.props.getDetailProfile(this.props.match.params.id).then(() => this.setState({ initial: false }));
    } else {
      this.setState({ initial: false });
    }
  }

  render = () => {
    let header = (
      <DetailProfileHeader
        id={this.props.detailProfile.id}
        img={this.props.detailProfile.img}
        name={this.props.detailProfile.personalDetail.name}
        email={this.props.detailProfile.contactDetail.email}
        phone={this.props.detailProfile.contactDetail.phone}
        jobType={this.props.detailProfile.employmentDetail.jobType}
        mainVenue={this.props.detailProfile.employmentDetail.mainVenue}
      />
    );
    const route = router
      .filter(elem => elem.com === 'DetailProfile')
      .map(el =>
        el.routes.map((elem, i) => (
          <Route key={elem.path + i} path={elem.path} exact={elem.exact} component={elem.component} />
        )),
      );
    if (this.props.isLoading || this.state.initial) {
      return (
        <div className="centerSpiner">
          <Spinner style={{ width: '5rem', height: '5rem' }} color="primary" />
        </div>
      );
    }
    if (this.props.match.path === '/detail/:id/edit') {
      header = null;
    }
    return (
      <main className="boss-page-main">
        {header}
        <Switch>{route}</Switch>
      </main>
    );
  };
}

const mapStateToProps = state => ({
  detailProfile: getDetailProfile(state),
  id: state.detailProfile.staffMember.id,
  isLoading: state.detailProfile.isLoading,
});

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
};
