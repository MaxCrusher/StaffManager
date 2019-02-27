import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';
import moment from 'moment';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { fetchEditPersonalData } from '../../../../../actions';
import { personalData } from '../../../../selector';
import InputNames from './InputNames';
import MySelect from './MySelect';
import DateField from '../DateField';
import './index.css';

const options = [{ value: 'male', label: 'male' }, { value: 'female', label: 'female' }];
class PersonalForm extends Component {
  onSubmit = async values => {
    const result = await this.props
      .editPersonalData(this.props.id, { ...values, dateOfBirth: values.dateOfBirth.format('DD-MM-YYYY') })
      .then(response => response)
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

  render = () => {
    let spinner = null;
    const regNum = RegExp(/\d/);

    const mustBeString = value => !!regNum.test(value);

    const required = value => !value;

    const composeValidators = (...validators) => value =>
      validators.reduce((error, validator) => error || validator(value), undefined);

    if (this.props.isLoadingForm) {
      spinner = (
        <div className="shadowLoading">
          <div className="centerSpiner">
            <Spinner style={{ width: '5rem', height: '5rem' }} color="primary" />
          </div>
        </div>
      );
    } else {
      spinner = null;
    }

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
              dateOfBirth: this.props.personalData.dateOfBirth ? moment(this.props.personalData.dateOfBirth) : null,
            }}
            render={({ handleSubmit, pristine }) => (
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
                <Field label="Date of birth*" component={DateField} name="dateOfBirth" />
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
          {spinner}
        </div>
      </article>
    );
  };
}
const mapStateToProps = state => ({
  personalData: personalData(state),
  id: state.detailProfile.staffMember.id,
  errors: state.errors,
  isLoadingForm: state.detailProfile.isLoadingForm,
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
  id: PropTypes.number.isRequired,
  editPersonalData: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  isLoadingForm: PropTypes.bool.isRequired,
};
