import React from 'react';
import PropTypes from 'prop-types';
import { style } from '../../style';

const InputText = props => {
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
  const errorTextCharacter = 'This field can contain only character!';
  const errorTextNumber = 'This field can contain only number!';
  const errorTextEmail = 'It should be a correct email address!';
  return (
    <div className="boss-form__field">
      <label className="boss-form__label">
        <span className="boss-form__label-text">{props.label}</span>
        <input
          className={props.className}
          onChange={props.input.onChange}
          value={props.input.value}
          onFocus={props.input.onFocus}
          onBlur={props.input.onBlur}
          ref={props.input.ref}
          style={props.meta.valid ? style.bColorNone : style.bColorRed}
        />
        <div className="boss-form__error" style={props.meta.valid ? style.dNone : style.dBlock}>
          <p className="boss-form__error-text">
            <span className="boss-form__error-line">
              {errors() || props.meta.valid
                ? errors()
                : props.input.name === 'email'
                ? errorTextEmail
                : props.input.name === 'postcode'
                ? errorTextNumber
                : errorTextCharacter}
            </span>
          </p>
        </div>
      </label>
    </div>
  );
};

export default InputText;
InputText.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  required: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
};
