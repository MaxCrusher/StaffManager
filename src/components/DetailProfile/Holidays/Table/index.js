import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import RowMin from './RowMin';
import MainRow from './MainRow';

export class Table extends Component {
  render = () => {
    console.log(this.props);
    const row = this.props.holidays.map(elem => <Row key={elem.id + elem.createDate} holiday={elem} />);
    console.log('object');
    return (
      <div className="boss-board__manager-table">
        <div className="boss-table boss-table_page_smp-holiday-requests">
          <MainRow />
          {row}
        </div>
        <RowMin />
      </div>
    );
  };
}

export default Table;
Table.propTypes = {
  holidays: PropTypes.array.isRequired,
};
