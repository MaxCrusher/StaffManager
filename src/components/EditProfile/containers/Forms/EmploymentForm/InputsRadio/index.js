import React from 'react';
import PropTypes from 'prop-types';

const input = [
  { value: 'employment_status_a', text: 'I have supplied my P45 from my previous employer' },
  {
    value: 'employment_status_b',
    text:
      'This is my first job since the 6th of April. I have not been receiving taxable jobseekers allowance, Incapacity benefits or a state/occupational pernsion',
  },
  {
    value: 'employment_status_c',
    text:
      'This is now my only job. Since the 6th of April I have had another jobs received taxable jobseekers allowance, Incapacity benefit. I don’t receivea state/occupational pension',
  },
  { value: 'employment_status_d', text: 'I have another job or receive a state/occupational pernsion' },
  {
    value: 'employment_status_p45_supplied',
    text:
      'I left a course of higher education before the 6th of April &amp; receive my first student loan instalmen on or after the 1st of September 1998 &amp; I have not fully repaid my student loan',
  },
];

const InputsRadio = props => {
  const inputs = input.map((elem, i) => (
    <label key={elem.value + i} className="boss-choice-list__radio-label">
      <input
        onChange={props.input.onChange}
        type="radio"
        name="employmentStatus"
        value={elem.value}
        className="boss-choice-list__radio-button"
        checked={elem.value === props.input.value}
      />
      <span className="boss-choice-list__radio-label-text">{elem.text}</span>
    </label>
  ));

  return (
    <div className="boss-form__field">
      <div className="boss-choice-list">
        <div className="boss-choice-list__header">
          <h3 className="boss-choice-list__title">Starter Employement Status Statement</h3>
        </div>
        <div className="boss-choice-list__content">
          <p className="boss-choice-list__text">Tick one that applies</p>
          <div className="boss-choice-list__controls">{inputs}</div>
        </div>
      </div>
    </div>
  );
};
export default InputsRadio;
InputsRadio.propTypes = {
  input: PropTypes.object.isRequired,
};
