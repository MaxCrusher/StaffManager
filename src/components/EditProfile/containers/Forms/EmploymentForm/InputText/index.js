import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

class InputText extends Component {
  state = {
    displayNone: true,
    borderColor: false,
    textP: {
      day: 'Preferred days to work displayed to the rota (e.g mornings and weekends)',
      hours: 'Preferred number of hours to work per week displayed in the rota (e.g 40,20+)',
    },
  };

  render = () => {
    const regNum = RegExp(/\d/);
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
          />
        </label>
        <p className="boss-form__field-note">
          {this.props.name === 'day-pref'
            ? this.state.textP.day
            : this.props.name === 'hours-pref'
            ? this.state.textP.hours
            : ''}
        </p>
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
