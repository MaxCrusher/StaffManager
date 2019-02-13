import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form } from 'react-final-form';
import InputText from './InputText';
import { contactData } from '../../../../selector';
import { fetchEditContactData } from '../../../../../actions';

class ContactForm extends Component {
  onSubmit = async values => {
    this.props.editContactData(this.props.id, values);
  };

  render = () => {
    console.log('object');
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
            render={({ handleSubmit, pristine, invalid }) => (
              <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
                <InputText
                  label="Email"
                  name="email"
                  type="text"
                  classname="boss-form__input"
                  component="input"
                  required=""
                />
                <InputText
                  label="Phone number"
                  name="phone"
                  type="text"
                  classname="boss-form__input"
                  component="input"
                  required=""
                />
                <InputText
                  label="Address"
                  name="address"
                  type="text"
                  classname="boss-form__input"
                  component="input"
                  required=""
                />
                <InputText
                  label="Postcode"
                  name="postcode"
                  type="text"
                  classname="boss-form__input"
                  component="input"
                  required=""
                />
                <InputText
                  label="Country"
                  name="country"
                  type="text"
                  classname="boss-form__input"
                  component="input"
                  required=""
                />
                <InputText
                  label="County"
                  name="county"
                  type="text"
                  classname="boss-form__input"
                  component="input"
                  required=""
                />
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
  contactData: contactData(state),
  id: state.detailProfile.staffMember.id,
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
};
