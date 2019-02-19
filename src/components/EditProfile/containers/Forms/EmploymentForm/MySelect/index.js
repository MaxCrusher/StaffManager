import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { inputStyles, indicatorSeparatorStyle } from '../../style';

const IndicatorSeparator = ({ innerProps }) => <span style={indicatorSeparatorStyle} {...innerProps} />;

const MySelect = props => (
  <div className="boss-form__field">
    <label htmlFor="select-pay-rate" className="boss-form__label">
      <span className="boss-form__label-text">{props.label}</span>
    </label>
    <div className="boss-form__select">
      <Select
        components={props.isMulti ? IndicatorSeparator : null}
        onChange={props.input.onChange}
        value={props.input.value}
        onFocus={props.input.onFocus}
        onBlur={props.input.onBlur}
        options={props.options}
        styles={inputStyles}
        isMulti={props.isMulti}
      />
    </div>
  </div>
);
export default MySelect;
MySelect.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  isMulti: PropTypes.bool.isRequired,
};
