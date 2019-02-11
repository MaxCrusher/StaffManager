import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';

class ContactForm extends Component {
  render = () => {
    console.log('object');
    return (
      <article className="boss-content-switcher__chapter" data-chapter="contact">
        <header className="boss-content-switcher__header">
          <h2 className="boss-content-switcher__title">Contact Details</h2>
        </header>
        <div className="boss-content-switcher__content">
          <Form
            render={({ handleSubmit, pristine, invalid }) => (
              <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
                <div className="boss-form__field">
                  <label className="boss-form__label">
                    <span className="boss-form__label-text">Email</span>
                    <input
                      name="email"
                      type="email"
                      className="boss-form__input boss-form__input_state_error"
                      required=""
                    />
                  </label>

                  <div className="boss-form__error">
                    <p className="boss-form__error-text">
                      <span className="boss-form__error-line">This is a required field!</span>
                      <span className="boss-form__error-line">It should be a correct email address!</span>
                    </p>
                  </div>
                </div>
                <div className="boss-form__field">
                  <label className="boss-form__label">
                    <span className="boss-form__label-text">Phone number</span>
                    <input name="phone" type="text" className="boss-form__input" />
                  </label>
                </div>
                <div className="boss-form__field">
                  <label className="boss-form__label">
                    <span className="boss-form__label-text">Address</span>
                    <input name="address" type="text" className="boss-form__input" />
                  </label>
                </div>
                <div className="boss-form__field">
                  <label className="boss-form__label">
                    <span className="boss-form__label-text">Postcode</span>
                    <input name="postcode" type="text" className="boss-form__input" />
                  </label>
                </div>
                <div className="boss-form__field">
                  <label className="boss-form__label">
                    <span className="boss-form__label-text">Country</span>
                    <input name="country" type="text" className="boss-form__input" />
                  </label>
                </div>
                <div className="boss-form__field">
                  <label className="boss-form__label">
                    <span className="boss-form__label-text">County</span>
                    <input name="county" type="text" className="boss-form__input" />
                  </label>
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

export default ContactForm;
