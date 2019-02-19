import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { fetchEditPersonalData } from '../../../../../actions';
import { personalData } from '../../../../selector';
import { inputStyles } from '../style';
import InputNames from './InputNames';
import MySelect from './MySelect';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css';

const options = [{ value: 'male', label: 'male' }, { value: 'female', label: 'female' }];
class PersonalForm extends Component {
  state = {
    startDate: new Date(this.props.personalData.dateOfBirth),
    isOpen: false,
  };

  onSubmit = values => {
    console.log(values);
    this.props.editPersonalData(this.props.id, values);
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

  render = () => {
    const regNum = RegExp(/\d/);

    const mustBeString = value => !!regNum.test(value);

    const required = value => !value;

    const composeValidators = (...validators) => value =>
      validators.reduce((error, validator) => error || validator(value), undefined);

    return (
      <article className="boss-content-switcher__chapter" data-chapter="personal">
        <header className="boss-content-switcher__header">
          <h2 className="boss-content-switcher__title">Personal Details</h2>
        </header>
        <div className="boss-content-switcher__content">
          <Form
            onSubmit={this.onSubmit}
            initialValues={{
              firstName: this.props.personalData.firstName,
              surname: this.props.personalData.surname,
              gender: this.props.personalData.gender === 'male' ? options[0] : options[1],
              dateOfBirth: '12-12-2000',
            }}
            render={({ handleSubmit, pristine, invalid }) => (
              <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
                <Field
                  component={InputNames}
                  name="firstName"
                  className="boss-form__input"
                  label="First name*"
                  validate={composeValidators(required, mustBeString)}
                />
                <Field
                  component={InputNames}
                  label="Surname*"
                  className="boss-form__input"
                  name="surname"
                  validate={composeValidators(required, mustBeString)}
                />
                <Field label="Gender*" component={MySelect} options={options} name="gender" />

                <div className="boss-form__field">
                  <p className="boss-form__label">
                    <span className="boss-form__label-text">Date of birth*</span>
                  </p>

                  <div className="date-picker-input" onClick={this.toggleCalendar}>
                    <DatePicker dateFormat="dd/MM/yyyy" selected={this.state.startDate} onChange={this.handleChange} />
                  </div>
                </div>
                <div className="boss-form__field boss-form__field_justify_end">
                  <button
                    className="boss-button boss-form__submit boss-form__submit_adjust_single"
                    type="submit"
                    disabled={pristine || invalid}
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
  personalData: personalData(state),
  id: state.detailProfile.staffMember.id,
});
const mapDispatchToProps = {
  editPersonalData: fetchEditPersonalData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PersonalForm);
PersonalForm.propTypes = {
  personalData: PropTypes.object.isRequired,
  firstName: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  editPersonalData: PropTypes.func.isRequired,
};
