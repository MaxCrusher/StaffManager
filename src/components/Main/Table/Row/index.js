import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { nameRows } from '../../../selector';
import ItemRow from './ItemRow';

class Row extends Component {
  render = () => {
    console.log(this.props);
    // const itemsRow = this.props.nameRow.map(elem => ({ ...elem, content: this.props.profile.filter(prof => prof)}));
    return (
      <div className="boss-table__row">
        <ItemRow name={this.props.nameRow[0].name} content={this.props.profile.id} />
        <ItemRow name={this.props.nameRow[1].name} content={this.props.profile.name} />
        <ItemRow name={this.props.nameRow[2].name} content={this.props.profile.modifided} />
        <ItemRow name={this.props.nameRow[3].name} content={this.props.profile.status} />
        <ItemRow name={this.props.nameRow[4].name} content={this.props.profile.type} />
        <ItemRow name={this.props.nameRow[5].name} content={this.props.profile.masterVenue} />
        <ItemRow name={this.props.nameRow[6].name} content={this.props.profile.workVenue} />
      </div>
    );
  };
}
const mapStateToProps = state => ({
  nameRow: nameRows(state),
});
export default connect(mapStateToProps)(Row);
Row.propTypes = {
  profile: PropTypes.object.isRequired,
  nameRow: PropTypes.array.isRequired,
};
// <ItemRow key={elem.id} name={elem.name} id={elem.id} profile={this.props.profile} />
