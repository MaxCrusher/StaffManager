import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';
import { connect } from 'react-redux';
import Table from './Table';
import { getHolidays } from '../../selector';
import { fetchProfiles, updateHolidaysIsLoading, failFetchGetHolidays } from '../../../actions';

class Holidays extends Component {
  state = {
    initial: true,
  };

  componentDidMount = async () => {
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

  render = () => {
    console.log(this.props, '+');
    if (this.props.isLoading) {
      console.log('=+');
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
                  <div className="boss-board__manager-filter">
                    <form action="#" className="boss-form">
                      <div className="boss-form__group boss-form__group_position_last">
                        <h3 className="boss-form__group-title">Filter</h3>
                        <div className="boss-form__row boss-form__row_align_center boss-form__row_desktop boss-form__row_position_last">
                          <div className="boss-form__field boss-form__field_layout_quarter">
                            <label className="boss-form__label">
                              <span className="boss-form__label-text">Type</span>
                            </label>
                            <div className="boss-form__select">select</div>
                          </div>
                          <div className="boss-form__field boss-form__field_layout_max boss-form__field_no-label">
                            <div className="date-range-picker date-range-picker_type_interval-fluid date-range-picker_type_icon date-range-picker_no-label">
                              range-datepicker
                            </div>
                          </div>
                          <div className="boss-form__field boss-form__field_layout_min boss-form__field_no-label">
                            <button className="boss-button boss-form__submit" type="submit">
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
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
  isLoading: state.holiday.isLoading,
});

const mapDispatchToProps = {
  getProfiles: fetchProfiles,
  getHolidays: failFetchGetHolidays,
  updateIsLoading: updateHolidaysIsLoading,
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
};
