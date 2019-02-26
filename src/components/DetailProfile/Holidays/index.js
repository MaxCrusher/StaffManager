import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';
import { connect } from 'react-redux';
import Table from './Table';
import Filter from './Filter';
import { getHolidays, getTypesAndStatus } from '../../selector';
import { fetchProfiles, updateHolidaysIsLoading, failFetchGetHolidays, updateHolidaysA } from '../../../actions';

class Holidays extends Component {
  state = {
    holidays: this.props.holidays,
    initial: true,
    type: null,
    dateFilter: {
      startDate: '',
      endDate: '',
    },
  };

  componentDidMount = async () => {
    console.log(this.state, this.props.holidays);
    if (this.props.isLoading) {
      this.props
        .getProfiles()
        .then(
          this.props
            .getHolidays()
            .then(response => this.props.updateIsLoading())
            .catch(e => {
              alert('Все очень плохо, ошибка сервера'.concat(e.pesponse.status));
            }),
        )
        .catch(e => {
          alert('Все очень плохо, ошибка сервера'.concat(e.pesponse.status));
        });
    }
  };

  filter = data => {
    console.log(data);
    this.props.updateHolydays(data);
    /* const holidaysNew = this.state.holidays.filter(
      hol =>
        type === null ||
        (hol.idType === type.id &&
          hol.startDate > data.datesFilter.startDate &&
          hol.endDate < data.datesFilter.endDate),
    );
    this.setState({
      holidays: holidaysNew,
    });
    // filterHolidays(data.typeFilter, data.datesFilter)(this.props); */
  };

  render = () => {
    console.log(this.props);
    if (this.props.isLoading) {
      return (
        <div className="centerSpiner">
          <Spinner style={{ width: '5rem', height: '5rem' }} color="primary" />
        </div>
      );
    }
    return (
      <div className="boss-page-main__content">
        <div className="boss-page-main__inner">
          <section className="boss-board">
            <header className="boss-board__header">
              <h2 className="boss-board__title">Holidays and holiday requests</h2>
              <div className="boss-board__button-group">
                <p className="boss-button boss-button_role_add">Add Holiday</p>
              </div>
            </header>
            <div className="boss-board__main">
              <div className="boss-board__manager">
                <div className="boss-board__manager-stats boss-board__manager-stats_layout_row">
                  <div className="boss-count boss-count_adjust_row">
                    <div className="boss-count__group">
                      <p className="boss-count__number">6</p>
                      <p className="boss-count__label">Days accured current tax year (Estimated)</p>
                    </div>
                  </div>
                  <div className="boss-count boss-count_adjust_row">
                    <div className="boss-count__group">
                      <p className="boss-count__number">9</p>
                      <p className="boss-count__label">Paid days logged in current tax year</p>
                    </div>
                  </div>
                  <div className="boss-count boss-count_adjust_row">
                    <div className="boss-count__group">
                      <p className="boss-count__number">9</p>
                      <p className="boss-count__label">Unpaid days logged in current tax year</p>
                    </div>
                  </div>
                </div>
                <div className="boss-board__manager-group boss-board__manager-group_role_data">
                  <Filter
                    options={this.props.masTypeAndStatus.typeMas}
                    onFilter={this.filter}
                    typeFilter={this.props.holidays.typeFilter}
                    datesFilter={this.props.holidays.datesFilter}
                    history={this.props.history}
                  />
                  <Table holidays={this.props.holidays} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  holidays: getHolidays(state),
  masTypeAndStatus: getTypesAndStatus(state),
  isLoading: state.holiday.isLoading,
});

const mapDispatchToProps = {
  getProfiles: fetchProfiles,
  getHolidays: failFetchGetHolidays,
  updateIsLoading: updateHolidaysIsLoading,
  updateHolydays: updateHolidaysA,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Holidays);
Holidays.propTypes = {
  holidays: PropTypes.array.isRequired,
  getProfiles: PropTypes.func.isRequired,
  getHolidays: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  updateIsLoading: PropTypes.func.isRequired,
  masTypeAndStatus: PropTypes.object.isRequired,
  updateHolydays: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
