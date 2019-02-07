import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MainRow from './MainRow';
import Row from './Row';
import { allProfile } from '../../selector';
import { failFetchProfiles } from '../../../actions';

class Table extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render = () => {
    const rows = this.props.profile.map((prof, i) => <Row key={i} id={prof.id} profile={prof} />);
    return (
      <div className="boss-table boss-table_page_staff-members-index">
        <MainRow />
        {rows}
      </div>
    );
  };
}

const mapStateToProps = state => ({
  profile: allProfile(state),
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
};
