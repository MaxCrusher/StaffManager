import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MainRow from './MainRow';
import Row from './Row';
import { getProfile } from '../../selector';
import { failFetchProfiles } from '../../../actions';

class Table extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render = () => {
    console.log(this.props);
    const rows = this.props.profile.map((prof, i) => <Row key={i} id={prof.id} profile={prof} />);
    if (this.props.isLoading) {
      return <Spinner style={{ width: '5rem', height: '5rem' }} color="primary" />;
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
  isLoading: state.appReducer.isLoading,
});
const mapDispatchToProps = {
  getProfiles: failFetchProfiles,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Table);

Table.propTypes = {
  profile: PropTypes.array.isRequired,
  getProfiles: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
