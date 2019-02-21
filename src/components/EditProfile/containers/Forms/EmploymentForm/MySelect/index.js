import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { inputStyles, indicatorSeparatorStyle, style } from '../../style';

const IndicatorSeparator = ({ innerProps }) => <span style={indicatorSeparatorStyle} {...innerProps} />;

const MySelect = props => {
  const errors = () => {
    if (props.meta.submitError) {
      let text = '';
      props.meta.submitError.forEach(elem => {
        text += elem;
      });
      return text;
    }
    return null;
  };
  return (
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
          styles={inputStyles(props.meta.valid)}
          isMulti={props.isMulti}
        />
      </div>
      <div className="boss-form__error" style={props.meta.valid ? style.dNone : style.dBlock}>
        <p className="boss-form__error-text">
          <span className="boss-form__error-line">{errors() || props.meta.valid ? errors() : null}</span>
        </p>
      </div>
    </div>
  );
};
export default MySelect;
MySelect.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  isMulti: PropTypes.bool.isRequired,
};
