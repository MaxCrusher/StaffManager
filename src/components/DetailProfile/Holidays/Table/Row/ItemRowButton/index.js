import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { failDeleteHoliday } from '../../../../../../actions';

class ItemRowButton extends Component {
  deleteHoliday = () => {
    console.log(this.props.id);
    this.props
      .deleteHoliday(this.props.id)
      .then(response => response)
      .catch(e => console.log(e));
  };

  render = () => {
    if (this.props.frozen) {
      return (
        <div className="boss-table__cell">
          <div className="boss-table__info">
            <p className="boss-table__label">Action</p>
          </div>
        </div>
      );
    }
    return (
      <div className="boss-table__cell">
        <div className="boss-table__info">
          <p className="boss-table__label">Action</p>
          <div className="boss-table__actions">
            <a href="#" className="boss-button boss-button_type_small boss-button_role_update boss-table__action">
              Edit
            </a>
            <a
              className="boss-button boss-button_type_small boss-button_role_cancel boss-table__action"
              onClick={this.deleteHoliday}
            >
              Delete
            </a>
          </div>
        </div>
      </div>
    );
  };
}

const mapDispatchToProps = {
  deleteHoliday: failDeleteHoliday,
};

export default connect(
  null,
  mapDispatchToProps,
)(ItemRowButton);
ItemRowButton.propTypes = {
  frozen: PropTypes.bool.isRequired,
  deleteHoliday: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
