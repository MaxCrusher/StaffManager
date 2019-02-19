import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { inputStyles } from '../../style';

const MySelect = props => (
  <div className="boss-form__field">
    <label htmlFor="select-gender" className="boss-form__label">
      <span className="boss-form__label-text">{props.label}</span>
      <div className="boss-form__select">
        <Select
          onChange={props.input.onChange}
          value={props.input.value}
          onFocus={props.input.onFocus}
          onBlur={props.input.onBlur}
          options={props.options}
          styles={inputStyles}
        />
      </div>
    </label>
  </div>
);
export default MySelect;
MySelect.propTypes = {
  input: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};
