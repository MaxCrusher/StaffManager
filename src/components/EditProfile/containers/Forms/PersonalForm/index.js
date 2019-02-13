import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { fetchEditPersonalData } from '../../../../../actions';
import { personalData } from '../../../../selector';
import InputNames from './InputNames';

class PersonalForm extends Component {
  onSubmit = async values => {
    this.props.editPersonalData(this.props.id, values);
  };

  render = () => {
    const subGender = () => {
      if (this.props.personalData.gender === 'female') {
        return 'male';
      }
      return 'female';
    };
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
              select: this.props.personalData.gender,
              dateOfBirth: '12-12-2000',
            }}
            render={({ handleSubmit, pristine, invalid }) => (
              <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
                <InputNames
                  label="First Name*"
                  name="firstName"
                  type="text"
                  classname="boss-form__input"
                  required=""
                  component="input"
                />
                <InputNames
                  label="Surname*"
                  name="surname"
                  type="text"
                  classname="boss-form__input"
                  required=""
                  component="input"
                />
                <div className="boss-form__field">
                  <label htmlFor="select-gender" className="boss-form__label">
                    <span className="boss-form__label-text">Gender*</span>
                    <div className="boss-form__select">
                      <div className="Select-control">
                        <Field name="select" component="select">
                          <option className="Select-option is-focused">{this.props.personalData.gender}</option>
                          <option className="Select-option">{subGender()}</option>
                        </Field>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="boss-form__field">
                  <p className="boss-form__label">
                    <span className="boss-form__label-text">Date of birth*</span>
                  </p>

                  <div className="date-picker-input date-picker-input_type_icon">
                    <div className="react-datepicker__input-container react-datepicker__tether-target react-datepicker__tether-element-attached-bottom react-datepicker__tether-element-attached-left react-datepicker__tether-target-attached-top react-datepicker__tether-target-attached-left react-datepicker__tether-enabled">
                      <div className="date-picker-input-field" />
                    </div>
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
