import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

class InputText extends Component {
  state = {
    displayNone: true,
    borderColor: false,
  };

  render = () => {
    const regNum = RegExp(/\d/);
    const regChar = RegExp(/\D/);
    const regEmail = RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
    const errorTextCharacter = 'This field can contain only character!';
    const errorTextNumber = 'This field can contain only number!';
    const errorTextEmail = 'It should be a correct email address!';

    const mustBeValid = value => {
      if (this.props.name !== 'email') {
        // validation email
        if (this.props.name !== 'address') {
          if (
            (this.props.name === 'postcode' || this.props.name === 'phone') &&
            regChar.test(value) &&
            value !== undefined
          ) {
            // validation postcode and phone
            this.setState({ displayNone: false, borderColor: true }, () => 'Required');
          } else if (this.props.name !== 'postcode' && this.props.name !== 'phone' && regNum.test(value)) {
            // validation country and county
            this.setState({ displayNone: false, borderColor: true }, () => 'Required');
          } else {
            this.setState({ displayNone: true, borderColor: false }, () => undefined);
          }
        }
      } else if (!regEmail.test(value)) {
        // validation email
        this.setState({ displayNone: false, borderColor: true }, () => 'Required');
      } else {
        this.setState({ displayNone: true, borderColor: false }, () => undefined);
      }
    };

    const style = {
      dNone: { display: 'none' },
      dBlock: { display: 'block' },
      bColorRed: { borderColor: '#ed7f7e' },
      bColorNone: { borderColor: '' },
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
            validate={mustBeValid}
            style={this.state.borderColor ? style.bColorRed : style.bColorNone}
          />
          <div className="boss-form__error" style={this.state.displayNone ? style.dNone : style.dBlock}>
            <p className="boss-form__error-text">
              <span className="boss-form__error-line">
                {this.props.name === 'email'
                  ? errorTextEmail
                  : this.props.name === 'postcode'
                  ? errorTextNumber
                  : errorTextCharacter}
              </span>
            </p>
          </div>
        </label>
      </div>
    );
  };
}

export default InputText;
InputText.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  required: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
};
