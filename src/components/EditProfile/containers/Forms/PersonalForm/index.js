import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { fetchEditPersonalData } from '../../../../../actions';
import { personalData } from '../../../../selector';
import InputNames from './InputNames';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css';

const options = [{ value: 'male', label: 'male' }, { value: 'female', label: 'female' }];
class PersonalForm extends Component {
  state = {
    startDate: new Date(this.props.personalData.dateOfBirth),
    isOpen: false,
    selectedOption: this.props.personalData.gender === 'male'
        ? { value: 'male', label: 'male' }
        : { value: 'female', label: 'female' },
  };

  onSubmit = async values => {
    this.props.editPersonalData(this.props.id, values);
  };

  handleChangeGender = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
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
    const inputStyles = {
      control: styles => ({ ...styles, height: '50px', borderRadius: '2px', borderColor: '#d8d8d8' }),
      placeholder: styles => ({
        ...styles,
        lineHeight: '48px',
        color: '#aaa',
        height: '50px',
      }),
      input: styles => ({
        ...styles,
        lineHeight: '48px',
        paddingLeft: '20px',
        paddingRight: '10px',
        color: '#aaa',
        height: '50px',
      }),
      singleValue: styles => ({
        ...styles,
        display: 'initial',
      }),
    };
    console.log(this.state.startDate, this.props.personalData.dateOfBirth);
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
                      <Field
                        component={() => (
                          <Select
                            value={this.state.selectedOption}
                            onChange={this.handleChangeGender}
                            options={options}
                            styles={inputStyles}
                          />
                        )}
                        value={this.state.selectedOption.value}
                        required=""
                        name="select"
                      />
                    </div>
                  </label>
                </div>
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
