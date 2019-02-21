import React from 'react';
import PropTypes from 'prop-types';
import { style } from '../../style';

const InputText = props => {
  const textP = {
    day: 'Preferred days to work displayed to the rota (e.g mornings and weekends)',
    hours: 'Preferred number of hours to work per week displayed in the rota (e.g 40,20+)',
  };

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
      </label>
      <p className="boss-form__field-note">
        {props.input.name === 'dayPreferenceNote'
          ? textP.day
          : props.input.name === 'hoursPreferenceNote'
          ? textP.hours
          : ''}
      </p>
    </div>
  );
};

export default InputText;
InputText.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};
