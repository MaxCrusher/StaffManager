import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import InputText from './InputText';
import DateField from '../DateField';
import MySelect from './MySelect';
import InputsRadio from './InputsRadio';
import { employmentData } from '../../../../selector';
import { fetchEditEmploymentData } from '../../../../../actions';
import './index.css';

class EmploymentForm extends Component {
  onSubmit = async values => {
    const result = await this.props
      .editEmploymentInfo(this.props.id, {
        ...values,
        startsAt: values.startsAt.format('DD-MM-YYYY'),
      })
      .then(response => response.status)
      .catch(e => {
        if (e.response.status === 422) {
          return e.response.data.errors;
        }
        return window.alert('Очень серьезная ошибка сервера '.concat(e.response.status));
      });
    return result;
  };

  handleChange = date => {
    this.setState({
      startDate: date,
    });
  };

  toggleCalendar = e => {
    e && e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  };

  render = () => (
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
            staffType: this.props.employmentData.staffType,
            payRate: this.props.employmentData.payRate,
            masterVenue: this.props.employmentData.mainVenue,
            otherVenues: this.props.employmentData.otherVenue,
            employmentStatus: this.props.employmentData.employmentStatus,
            startsAt: moment(
              `${this.props.employmentData.startsAt[0]}-${this.props.employmentData.startsAt[1]}-${
                this.props.employmentData.startsAt[2]
              }`,
            ),
          }}
          render={({ handleSubmit, pristine }) => (
            <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
              <Field
                component={MySelect}
                label="Main Venue"
                labelHtmlFor="select-venue"
                name="masterVenue"
                options={this.props.employmentData.venuesMas}
                isMulti={false}
              />
              <Field
                component={MySelect}
                isMulti={true}
                options={this.props.employmentData.venuesMas}
                name="otherVenues"
                label="Other Venues"
              />
              <Field
                component={MySelect}
                label="Staff Type*"
                labelHtmlFor="select-staff-type"
                name="staffType"
                options={this.props.employmentData.staffTypes}
                isMulti={false}
              />
              <Field component={DateField} label="Starts at*" name="startsAt" />
              <Field
                component={MySelect}
                label="Pay rate*"
                labelHtmlFor="select-pay-rate"
                name="payRate"
                options={this.props.employmentData.payRates}
                isMulti={false}
              />
              <Field
                component={InputText}
                label="Day Preference"
                name="dayPreferenceNote"
                className="boss-form__input"
              />
              <Field
                component={InputText}
                label="Hours Preference"
                name="hoursPreferenceNote"
                className="boss-form__input"
              />
              <Field
                component={InputText}
                label="National Insurance Number"
                name="nationalInsuranceNumber"
                className="boss-form__input"
              />
              <Field component={InputText} label="Sage ID" name="sageId" className="boss-form__input" />
              <Field component={InputsRadio} name="employmentStatus" />
              <div className="boss-form__field boss-form__field_justify_end">
                <button
                  className="boss-button boss-form__submit boss-form__submit_adjust_single"
                  type="submit"
                  disabled={pristine}
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
}
const mapStateToProps = state => ({
  employmentData: employmentData(state),
  id: state.detailProfile.staffMember.id,
});

const mapDispatchToProps = {
  editEmploymentInfo: fetchEditEmploymentData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmploymentForm);
EmploymentForm.propTypes = {
  employmentData: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  editEmploymentInfo: PropTypes.func.isRequired,
};
