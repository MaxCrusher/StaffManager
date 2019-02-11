import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EmploymentForm extends Component {
  render = () => {
    console.log('object');
    return (
      <article
        className="boss-content-switcher__chapter boss-content-switcher__chapter_state_visible"
        data-chapter="employment"
      >
        <header className="boss-content-switcher__header">
          <h2 className="boss-content-switcher__title">Employment Details</h2>
        </header>
        <div className="boss-content-switcher__content">
          <form action="#" className="boss-form boss-form_page_profile-edit">
            <div className="boss-form__field">
              <label htmlFor="select-venue" className="boss-form__label">
                <span className="boss-form__label-text">Main Venue</span>
              </label>
              <div className="boss-form__select boss-form__select_state_error">
                <div className="Select Select--single" style={{ overflow: 'hidden' }}>
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
                </div>
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
                <input name="other-venues" type="text" className="boss-form__input" />
              </label>
            </div>
            <div className="boss-form__field">
              <label htmlFor="select-staff-type" className="boss-form__label">
                <span className="boss-form__label-text">Staff Type*</span>
              </label>
              <div className="boss-form__select">
                <div className="Select Select--single" style={{ overflow: 'hidden' }}>
                  <div className="Select-control">
                    <span className="Select-multi-value-wrapper" id="react-select-2--value">
                      <div className="Select-placeholder" />
                      <div
                        role="combobox"
                        aria-expanded="true"
                        aria-owns="react-select-2--list"
                        aria-activedescendant="react-select-2--option-1"
                        className="Select-input"
                        style={{ border: '0px, none', width: '1px', display: 'inline-block' }}
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
                </div>
              </div>
            </div>
            <div className="boss-form__field">
              <p className="boss-form__label">
                <span className="boss-form__label-text">Starts at*</span>
              </p>

              <div className="date-picker-input date-picker-input_type_icon">
                <div className="react-datepicker__input-container react-datepicker__tether-target react-datepicker__tether-element-attached-bottom react-datepicker__tether-element-attached-left react-datepicker__tether-target-attached-top react-datepicker__tether-target-attached-left react-datepicker__tether-enabled">
                  <div className="date-picker-input-field" />
                </div>
              </div>
            </div>
            <div className="boss-form__field">
              <label htmlFor="select-pay-rate" className="boss-form__label">
                <span className="boss-form__label-text">Pay rate*</span>
              </label>
              <div className="boss-form__select">
                <div className="Select Select--single" style={{ overflow: 'hidden' }}>
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
                </div>
              </div>
            </div>
            <div className="boss-form__field">
              <label className="boss-form__label">
                <span className="boss-form__label-text">Day Preference</span>
                <input name="day-pref" type="text" className="boss-form__input" />
              </label>
              <p className="boss-form__field-note">
                Preferred days to work displayed to the rota (e.g mornings and weekends)
              </p>
            </div>
            <div className="boss-form__field">
              <label className="boss-form__label">
                <span className="boss-form__label-text">Hours Preference</span>
                <input name="hours-pref" type="text" className="boss-form__input" />
              </label>
              <p className="boss-form__field-note">
                Preferred number of hours to work per week displayed in the rota (e.g 40,20+)
              </p>
            </div>
            <div className="boss-form__field">
              <label className="boss-form__label">
                <span className="boss-form__label-text">National Insurance Number</span>
                <input name="insurance-number" type="text" className="boss-form__input" />
              </label>
            </div>
            <div className="boss-form__field">
              <label className="boss-form__label">
                <span className="boss-form__label-text">Sage ID</span>
                <input name="sage-id" type="text" className="boss-form__input" />
              </label>
            </div>
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
                        I left a course of higher education before the 6th of April &amp; receive my first student loan
                        instalmen on or after the 1st of September 1998 &amp; I have not fully repaid my student loan
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="boss-form__field boss-form__field_justify_end">
              <button className="boss-button boss-form__submit boss-form__submit_adjust_single" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </article>
    );
  };
}

export default EmploymentForm;
