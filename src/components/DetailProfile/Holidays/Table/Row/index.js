import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemRow from './ItemRow';
import ItemRowCreated from './ItemRowCreated';
import ItemRowButton from './ItemRowButton';

class Row extends Component {
  render = () => {
    console.log(this.props);
    return (
      <div className={this.props.holiday.frozen ? 'boss-table__row boss-table__row_state_frozen' : 'boss-table__row'}>
        <ItemRow label="Types" text={this.props.holiday.type} />
        <ItemRow
          label="Status"
          text={this.props.holiday.status.name}
          color={this.props.holiday.status.color}
          name="status"
        />
        <ItemRow
          label="Dates"
          name="date"
          startDate={this.props.holiday.startDate}
          endDate={this.props.holiday.endDate}
        />
        <ItemRow label="Note" text={this.props.holiday.note} />
        <ItemRowCreated
          user={this.props.holiday.user.firstName.concat(' ', this.props.holiday.user.surname)}
          date={this.props.holiday.createDate}
        />
        <ItemRow label="Payslip Date" text={this.props.holiday.payslipDate} />
        <ItemRowButton holiday={this.props.holiday} />
      </div>
    );
  };
}

export default Row;
Row.propTypes = {
  holiday: PropTypes.object.isRequired,
};
