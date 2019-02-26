import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Form, Field } from 'react-final-form';
import DateRange from '../ModalForm/DateRange';
import MySelectModal from '../ModalForm/MySelectModal';

export class Filter extends Component {
  state = {
    typeFilter: null,
    datesFilter: {
      startDate: null,
      endDate: null,
    },
    load: true,
  };

  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {
    const urlParams = window.location.search
      .replace('?', '')
      .split('&')
      .map(elem => elem.split('='));
    if (urlParams.length > 1) {
      this.setState(
        {
          typeFilter: this.props.options.filter(elem => elem.id === Number(urlParams[0][1])),
          datesFilter: {
            startDate: moment(urlParams[1][1], 'DD-MM-YYYY'),
            endDate: moment(urlParams[2][1], 'DD-MM-YYYY'),
          },
        },
        () => {
          this.props.onFilter({
            typeFilter: this.props.options.filter(elem => elem.id === Number(urlParams[0][1]))[0],
            datesFilter: {
              startDate: urlParams[1][1],
              endDate: urlParams[2][1],
            },
          });
          this.setState({ load: false });
        },
      );
    } else {
      this.setState({ load: false });
    }
  }

  onSubmit = values => {
    this.props.history.push(
      '?type='.concat(
        values.typeFilter.id,
        '&startDate=',
        values.datesFilter.startDate.format('DD-MM-YYYY'),
        '&endDate=',
        values.datesFilter.endDate.format('DD-MM-YYYY'),
      ),
    );
    this.props.onFilter({
      ...values,
      datesFilter: {
        ...values.datesFilter,
        startDate: values.datesFilter.startDate.format('DD-MM-YYYY'),
        endDate: values.datesFilter.endDate.format('DD-MM-YYYY'),
      },
    });
  };

  render = () => {
    console.log(this.props, this.state);
    if (this.state.load) {
      return null;
    }
    return (
      <div className="boss-board__manager-filter">
        <Form
          validateOnBlur={true}
          onSubmit={this.onSubmit}
          initialValues={{
            datesFilter: this.state.datesFilter,
            typeFilter: this.state.typeFilter,
          }}
          render={({ handleSubmit, pristine }) => (
            <form onSubmit={handleSubmit} className="boss-form">
              <div className="boss-form__group boss-form__group_position_last">
                <h3 className="boss-form__group-title">Filter</h3>
                <div className="boss-form__row boss-form__row_align_center boss-form__row_desktop boss-form__row_position_last">
                  <div className="boss-form__field boss-form__field_layout_quarter">
                    <Field
                      name="typeFilter"
                      label="Type"
                      component={MySelectModal}
                      isMulti={false}
                      options={this.props.options}
                    />
                  </div>
                  <div className="boss-form__field boss-form__field_layout_max boss-form__field_no-label">
                    <div className="date-range-picker date-range-picker_type_interval-fluid date-range-picker_type_icon date-range-picker_no-label">
                      <Field className="date-range-picker" label="Date" name="datesFilter" component={DateRange} />
                    </div>
                  </div>
                  <div className="boss-form__field boss-form__field_layout_min boss-form__field_no-label">
                    <button className="boss-button boss-form__submit" type="submit" disabled={pristine}>
                      Update
                    </button>
                  </div>
                </div>
              </div>
              <div className="boss-form__row boss-form__row_mobile boss-form__row_position_last">
                <div className="boss-form__field boss-form__field_layout_quarter">
                  <Field
                    name="typeFilter"
                    label="Type"
                    component={MySelectModal}
                    isMulti={false}
                    options={this.props.options}
                  />
                </div>
                <div className="boss-form__field boss-form__field_layout_max">
                  <div className="date-control date-control_type_icon date-control_type_interval">
                    <Field className="date-range-picker" label="Date" name="datesFilter" component={DateRange} />
                  </div>
                </div>
                <div className="boss-form__field boss-form__field_layout_min boss-form__field_no-label">
                  <button
                    className="boss-button boss-form__submit"
                    style={{ width: '100%', textAlign: 'center' }}
                    type="submit"
                    disabled={pristine}
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          )}
        />
      </div>
    );
  };
}

export default Filter;
Filter.propTypes = {
  options: PropTypes.object.isRequired,
  onFilter: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};
