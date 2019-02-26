import React from 'react';
import PropTypes from 'prop-types';
import BossDateRangePicker from '../../../../EditProfile/component/react-dates/boss-date-range-picker';
import 'react-dates/lib/css/_datepicker.css';

const DateRange = props => {
  const label =
    props.input.name === 'datesFilter' ? null : (
      <p className="boss-form__label">
        <span className="boss-form__label-text">{props.label}</span>
      </p>
    );
  return (
    <div className="boss-form__field boss-form__field_layout_max">
      {label}
      <div className="date-control date-control_type_icon date-control_type_interval">
        <BossDateRangePicker
          className={props.className}
          startDate={props.input.value.startDate}
          endDate={props.input.value.endDate}
          onApply={props.input.onChange}
          id="your_id"
        />
      </div>
    </div>
  );
};
export default DateRange;
DateRange.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};
