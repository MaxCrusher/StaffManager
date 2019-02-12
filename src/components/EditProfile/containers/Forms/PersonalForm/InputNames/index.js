import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

class InputNames extends Component {
  state = {
    displayNone: true,
    borderColor: false,
  };

  render = () => {
    const regNum = RegExp(/\d/);

    const mustBeString = value =>
      !regNum.test(value) ? undefined : this.setState({ displayNone: false, borderColor: true }, () => 'Required');

    const composeValidators = (...validators) => value =>
      validators.reduce((error, validator) => error || validator(value), undefined);

    const style = {
      dNone: { display: 'none' },
      dBlock: { display: 'block' },
      bColorRed: { borderColor: '#ed7f7e' },
      bColorNone: { borderColor: '' },
    };

    const required = value => {
      if (value) {
        this.setState({ displayNone: true, borderColor: false }, () => undefined);
      } else {
        this.setState({ displayNone: false, borderColor: true }, () => 'Required');
      }
    };
    return (
      <div className="boss-form__field">
        <label className="boss-form__label">
          <span className="boss-form__label-text">{this.props.label}</span>
          <Field
            id={1}
            name={this.props.name}
            type={this.props.type}
            className={this.props.classname}
            required={this.props.required}
            component={this.props.component}
            validate={composeValidators(required, mustBeString)}
            style={this.state.borderColor ? style.bColorRed : style.bColorNone}
          />
          <div className="boss-form__error" style={this.state.displayNone ? style.dNone : style.dBlock}>
            <p className="boss-form__error-text">
              <span className="boss-form__error-line">This is a required field!</span>
            </p>
          </div>
        </label>
      </div>
    );
  };
}
export default InputNames;
InputNames.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  required: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
};
