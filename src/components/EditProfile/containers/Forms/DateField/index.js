import React from 'react';
import PropTypes from 'prop-types';
import BossDatePicker from '../../../component/react-dates/boss-date-picker';
import 'react-dates/lib/css/_datepicker.css';

const DateField = props => (
  <div className="boss-form__field">
    <p className="boss-form__label">
      <span className="boss-form__label-text">{props.label}</span>
    </p>
    <BossDatePicker date={props.input.value} onApply={props.input.onChange} id="your_unique_id" />
  </div>
);
export default DateField;
DateField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};
