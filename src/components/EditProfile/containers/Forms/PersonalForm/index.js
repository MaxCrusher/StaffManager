import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';

class PersonalForm extends Component {
  onSubmit = () => {
    console.log('object');
  };

  render = () => {
    console.log('object');
    return (
      <article className="boss-content-switcher__chapter" data-chapter="personal">
        <header className="boss-content-switcher__header">
          <h2 className="boss-content-switcher__title">Personal Details</h2>
        </header>
        <div className="boss-content-switcher__content">
          <Form
            onSubmit={this.onSubmit}
            render={({ handleSubmit, pristine, invalid }) => (
              <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
                <div className="boss-form__field">
                  <label className="boss-form__label">
                    <span className="boss-form__label-text">First Name*</span>
                    <Field name="first-name" type="text" className="boss-form__input" required="" component="input" />
                  </label>
                </div>
                <div className="boss-form__field">
                  <label className="boss-form__label">
                    <span className="boss-form__label-text">Surname*</span>
                    <Field name="surname" type="text" className="boss-form__input" component="input" required="" />
                  </label>
                </div>
                <div className="boss-form__field">
                  <label htmlFor="select-gender" className="boss-form__label">
                    <span className="boss-form__label-text">Gender*</span>
                  </label>
                  <div className="boss-form__select">
                    {/* <div className="Select Select--single" style={{ overflow: 'hidden' }}>
                      <div className="Select-control">
                        <span className="Select-multi-value-wrapper" id="react-select-2--value">
                          <div className="Select-placeholder" />
                          <div
                            role="combobox"
                            aria-expanded="true"
                            aria-owns="react-select-2--list"
                            aria-activedescendant="react-select-2--option-1"
                            className="Select-input"
                            style={{ border: '0px none', width: '1px', display: 'inline-block' }}
                          />
                        </span>
                        <span className="Select-arrow-zone">
                          <span className="Select-arrow" />
                        </span>
                      </div>
                      <div className="Select-menu-outer">
                        <div role="listbox" className="Select-menu" id="react-select-2--list">
                          <div className="Select-option is-focused" id="react-select-2--option-1">
                            Option
                          </div>
                          <div className="Select-option" id="react-select-2--option-2">
                            Option
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <Field component="select">
                    <option className="Select-option is-focused">Option</option>
                    <option className="Select-option">Option</option>
                  </Field>
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

export default PersonalForm;
