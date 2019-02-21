import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MainRow from './MainRow';
import Row from './Row';
import { getProfile } from '../../selector';
import { fetchProfiles } from '../../../actions';
import '../../../App.css';

class Table extends Component {
  componentDidMount() {
    if (this.props.isLoading && this.props.url === '/') {
      this.props
        .getProfiles()
        .then(response => console.log(response.status))
        .catch(e => {
          alert('Все очень плохо, ошибка сервера'.concat(e.pesponse.status));
        });
    }
  }

  render = () => {
    console.log(this.props);
    const rows = this.props.profile.map((prof, i) => <Row key={i} id={prof.id} profile={prof} />);
    if (this.props.isLoading) {
      return (
        <div className="centerSpiner">
          <Spinner style={{ width: '5rem', height: '5rem' }} color="primary" />
        </div>
      );
    }
    return (
      <div className="boss-table boss-table_page_staff-members-index">
        <MainRow />
        {rows}
      </div>
    );
  };
}

const mapStateToProps = state => ({
  profile: getProfile(state),
  isLoading: state.profiles.isLoading,
});
const mapDispatchToProps = {
  getProfiles: fetchProfiles,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Table);

Table.propTypes = {
  profile: PropTypes.array.isRequired,
  getProfiles: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
};
