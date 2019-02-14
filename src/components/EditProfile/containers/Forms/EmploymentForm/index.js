import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import Select from 'react-select';
import InputText from './InputText';
import { employmentData } from '../../../../selector';
import inputStyles from '../styleConst';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css';

const indicatorSeparatorStyle = {
  alignSelf: 'stretch',
  marginBottom: 8,
  marginTop: 8,
  width: 1,
};
class EmploymentForm extends Component {
  state = {
    startDate: new Date(this.props.employmentData.startsAt),
    isOpen: false,
    selectedOptionMainVenue: this.props.employmentData.mainVenue,
    selectedOptionOtherVenue: this.props.employmentData.otherVenue,
    selectedOptionStaffType: this.props.employmentData.staffType,
    selectedOptionPayRate: this.props.employmentData.payRate,
  };

  onSubmit = values => {
    console.log({
      ...values,
      masterVenue: this.state.selectedOptionMainVenue.id,
      otherVenues: this.state.selectedOptionOtherVenue.map(elem => elem.id),
      staffType: this.state.selectedOptionStaffType.id,
      payRateId: this.state.selectedOptionPayRate.id,
      startsAt: `${new Date(this.state.startDate).getDate()}-${new Date(this.state.startDate).getMonth() +
        1}-${new Date(this.state.startDate).getFullYear()}`,
      employmentStatus: '',
    });
  };

  handleChangePayRate = selectedOptionPayRate => {
    this.setState({ selectedOptionPayRate });
  };

  handleChangeMainVenue = selectedOptionMainVenue => {
    this.setState({
      selectedOptionMainVenue,
    });
  };

  handleChangeStaffType = selectedOptionStaffType => {
    this.setState({
      selectedOptionStaffType,
    });
  };

  handleChangeOtherVenues = selectedOptionOtherVenue => {
    this.setState({ selectedOptionOtherVenue });
  };

  IndicatorSeparator = ({ innerProps }) => <span style={indicatorSeparatorStyle} {...innerProps} />;

  handleChange = date => {
    this.setState({
      startDate: date,
    });
  };

  toggleCalendar = e => {
    e && e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  };

  render = () => {
    console.log(
      new Date(this.state.startDate).getDate(),
      new Date(this.state.startDate).getMonth() + 1,
      new Date(this.state.startDate).getFullYear(),
    );
    return (
      <article
        className="boss-content-switcher__chapter boss-content-switcher__chapter_state_visible"
        data-chapter="employment"
      >
        <header className="boss-content-switcher__header">
          <h2 className="boss-content-switcher__title">Employment Details</h2>
        </header>
        <div className="boss-content-switcher__content">
          <Form
            validateOnBlur={true}
            onSubmit={this.onSubmit}
            initialValues={{
              dayPreferenceNote: this.props.employmentData.dayPreference,
              hoursPreferenceNote: this.props.employmentData.hoursPreference,
              nationalInsuranceNumber: this.props.employmentData.nationalInsuranceNumber,
              sageId: this.props.employmentData.sageId,
            }}
            render={({ handleSubmit, pristine, invalid }) => (
              <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
                <div className="boss-form__field">
                  <label htmlFor="select-venue" className="boss-form__label">
                    <span className="boss-form__label-text">Main Venue</span>
                  </label>
                  <div className="boss-form__select">
                    <Field
                      component={() => (
                        <Select
                          value={this.state.selectedOptionMainVenue}
                          onChange={this.handleChangeMainVenue}
                          options={this.props.employmentData.venuesMas}
                          styles={inputStyles}
                        />
                      )}
                      required=""
                      name="masterVenue"
                    />
                  </div>

                  <div className="boss-form__error">
                    <p className="boss-form__error-text">
                      <span className="boss-form__error-line">This is a required field!</span>
                    </p>
                  </div>
                </div>

                <div className="boss-form__field">
                  <label className="boss-form__label">
                    <span className="boss-form__label-text">Other Venues</span>
                  </label>
                  <div className="boss-form__select">
                    <Field
                      component={name => (
                        <Select
                          name={name}
                          defaultValue={this.state.selectedOptionOtherVenue}
                          onChange={this.handleChangeOtherVenues}
                          components={this.IndicatorSeparator}
                          options={this.props.employmentData.venuesMas}
                          isMulti
                          styles={inputStyles}
                        />
                      )}
                      required=""
                      name="otherVenues"
                      // component="select"
                    />
                  </div>
                </div>
                <div className="boss-form__field">
                  <label htmlFor="select-staff-type" className="boss-form__label">
                    <span className="boss-form__label-text">Staff Type*</span>
                  </label>
                  <div className="boss-form__select">
                    <Field
                      component={() => (
                        <Select
                          value={this.state.selectedOptionStaffType}
                          onChange={this.handleChangeStaffType}
                          options={this.props.employmentData.staffTypes}
                          styles={inputStyles}
                        />
                      )}
                      required=""
                      name="staffType"
                    />
                  </div>
                </div>
                <div className="boss-form__field">
                  <p className="boss-form__label">
                    <span className="boss-form__label-text">Starts at*</span>
                  </p>

                  <div className="date-picker-input" onClick={this.toggleCalendar}>
                    <DatePicker
                      name="startsAt"
                      dateFormat="dd/MM/yyyy"
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="boss-form__field">
                  <label htmlFor="select-pay-rate" className="boss-form__label">
                    <span className="boss-form__label-text">Pay rate*</span>
                  </label>
                  <div className="boss-form__select">
                    <Field
                      component={() => (
                        <Select
                          value={this.state.selectedOptionPayRate}
                          onChange={this.handleChangePayRate}
                          options={this.props.employmentData.payRates}
                          styles={inputStyles}
                        />
                      )}
                      required=""
                      name="payRate"
                    />
                  </div>
                </div>
                <InputText
                  label="Day Preference"
                  name="dayPreferenceNote"
                  type="text"
                  classname="boss-form__input"
                  component="input"
                  required=""
                />
                <InputText
                  label="Hours Preference"
                  name="hoursPreferenceNote"
                  type="text"
                  classname="boss-form__input"
                  component="input"
                  required=""
                />
                <InputText
                  label="National Insurance Number"
                  name="nationalInsuranceNumber"
                  type="text"
                  classname="boss-form__input"
                  component="input"
                  required=""
                />
                <InputText
                  label="Sage ID"
                  name="sageId"
                  type="text"
                  classname="boss-form__input"
                  component="input"
                  required=""
                />
                <div className="boss-form__field">
                  <div className="boss-choice-list">
                    <div className="boss-choice-list__header">
                      <h3 className="boss-choice-list__title">Starter Employement Status Statement</h3>
                    </div>
                    <div className="boss-choice-list__content">
                      <p className="boss-choice-list__text">Tick one that applies</p>
                      <div className="boss-choice-list__controls">
                        <label className="boss-choice-list__radio-label">
                          <input
                            type="radio"
                            name="employement-status"
                            value="1"
                            className="boss-choice-list__radio-button"
                            checked=""
                          />
                          <span className="boss-choice-list__radio-label-text">
                            I have supplied my P45 from my previous employer
                          </span>
                        </label>
                        <label className="boss-choice-list__radio-label">
                          <input
                            type="radio"
                            name="employement-status"
                            value="2"
                            className="boss-choice-list__radio-button"
                          />
                          <span className="boss-choice-list__radio-label-text">
                            This is my first job since the 6th of April. I have not been receiving taxable jobseekers
                            allowance, Incapacity benefits or a state/occupational pernsion
                          </span>
                        </label>
                        <label className="boss-choice-list__radio-label">
                          <input
                            type="radio"
                            name="employement-status"
                            value="3"
                            className="boss-choice-list__radio-button"
                          />
                          <span className="boss-choice-list__radio-label-text">
                            This is now my only job. Since the 6th of April I have had another jobs received taxable
                            jobseekers allowance, Incapacity benefit. I don’t receivea state/occupational pension
                          </span>
                        </label>
                        <label className="boss-choice-list__radio-label">
                          <input
                            type="radio"
                            name="employement-status"
                            value="4"
                            className="boss-choice-list__radio-button"
                          />
                          <span className="boss-choice-list__radio-label-text">
                            I have another job or receive a state/occupational pernsion
                          </span>
                        </label>
                        <label className="boss-choice-list__radio-label">
                          <input
                            type="radio"
                            name="employement-status"
                            value="5"
                            className="boss-choice-list__radio-button"
                          />
                          <span className="boss-choice-list__radio-label-text">
                            I left a course of higher education before the 6th of April &amp; receive my first student
                            loan instalmen on or after the 1st of September 1998 &amp; I have not fully repaid my
                            student loan
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="boss-form__field boss-form__field_justify_end">
                  <button
                    className="boss-button boss-form__submit boss-form__submit_adjust_single"
                    type="submit"
                    disabled={false}
                  >
                    Save
                  </button>
                </div>
              </form>
            )}
          />
        </div>
      </article>
    );
  };
}
const mapStateToProps = state => ({
  employmentData: employmentData(state),
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmploymentForm);
EmploymentForm.propTypes = {
  employmentData: PropTypes.object.isRequired,
  dateStart: PropTypes.object.isRequired,
};
