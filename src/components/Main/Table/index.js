import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MainRow from './MainRow';
import Row from './Row';
import { allProfile } from '../../selector';

class Table extends Component {
  componentDidMount() {
    this.props.editNumProfile(this.props.profile.length);
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
export default connect(mapStateToProps)(Table);

Table.propTypes = {
  profile: PropTypes.array.isRequired,
  editNumProfile: PropTypes.func.isRequired,
};
