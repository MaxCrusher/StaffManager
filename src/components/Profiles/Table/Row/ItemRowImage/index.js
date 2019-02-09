import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { failFetchRequest } from '../../../../../actions';

const URL = '/detail/';
class ItemRowImage extends Component {
  fetchDetailProfile = () => this.props.fetchRequest(this.props.id);

  render = () => (
    <div className="boss-table__image">
      <Link className="boss-table__link" to={URL + this.props.id} onClick={this.fetchDetailProfile}>
        <div className="boss-avatar boss-avatar_type_combined">
          <img src={this.props.content} alt="" className="boss-avatar__image" />
        </div>
      </Link>
    </div>
  );
}
const mapDispatchToProps = {
  fetchRequest: failFetchRequest,
};
export default connect(
  undefined,
  mapDispatchToProps,
)(ItemRowImage);
ItemRowImage.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  fetchRequest: PropTypes.func.isRequired,
};
