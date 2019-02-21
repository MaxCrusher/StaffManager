import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';
import { Form, Field } from 'react-final-form';
import InputText from './InputText';
import { contactData } from '../../../../selector';
import { fetchEditContactData } from '../../../../../actions';

class ContactForm extends Component {
  onSubmit = async values => {
    const result = await this.props
      .editContactData(this.props.id, values)
      .then(response => response.status)
      .catch(e => {
        if (e.response.status === 422) {
          return e.response.data.errors;
        }
        return alert('Очень серьезная ошибка сервера '.concat(e.response.status));
      });
    return result;
  };

  render = () => {
    let spinner = null;
    const regNum = RegExp(/\d/);
    const regChar = RegExp(/\D/);
    const regEmail = RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
    const validEmail = value => !regEmail.test(value);
    const validString = value => !!regNum.test(value);
    const validNumber = value => !!regChar.test(value);
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
      <article className="boss-content-switcher__chapter" data-chapter="contact">
        <header className="boss-content-switcher__header">
          <h2 className="boss-content-switcher__title">Contact Details</h2>
        </header>
        <div className="boss-content-switcher__content">
          <Form
            onSubmit={this.onSubmit}
            initialValues={{
              address: this.props.contactData.address,
              email: this.props.contactData.email,
              phone: this.props.contactData.phone,
              postcode: this.props.contactData.postcode,
              country: this.props.contactData.country,
              county: this.props.contactData.county,
            }}
            render={({ handleSubmit, pristine, submitErrors }) => (
              <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
                <Field
                  validate={composeValidators(validEmail)}
                  label="Email"
                  name="email"
                  className="boss-form__input"
                  component={InputText}
                />
                <Field label="Phone number" name="phone" className="boss-form__input" component={InputText} />
                <Field label="Address" name="address" className="boss-form__input" component={InputText} />
                <Field
                  validate={composeValidators(validNumber)}
                  label="Postcode"
                  name="postcode"
                  className="boss-form__input"
                  component={InputText}
                />
                <Field
                  validate={composeValidators(validString)}
                  label="Country"
                  name="country"
                  className="boss-form__input"
                  component={InputText}
                />
                <Field
                  validate={composeValidators(validString)}
                  label="County"
                  name="county"
                  className="boss-form__input"
                  component={InputText}
                />
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
  contactData: contactData(state),
  id: state.detailProfile.staffMember.id,
  isLoadingForm: state.detailProfile.isLoadingForm,
});

const mapDispatchToProps = {
  editContactData: fetchEditContactData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactForm);
ContactForm.propTypes = {
  contactData: PropTypes.object.isRequired,
  editContactData: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isLoadingForm: PropTypes.bool,
};
