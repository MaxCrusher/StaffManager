import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import moment from 'moment';
import Modal from 'react-modal';
import DateRange from './DateRange';
import { failEditHoliday } from '../../../../actions';
import { styleModal } from '../style';
import InputArea from './InputArea';
import MySelectModal from './MySelectModal';

export class ModalForm extends Component {
  onSubmit = values => {
    console.log({
      ...values,
      dates: {
        ...values.dates,
        startDate: values.dates.startDate.format('DD-MM-YYYY'),
        endDate: values.dates.endDate.format('DD-MM-YYYY'),
      },
    });
    this.props.editHoliday(this.props.id, {
      ...values,
      dates: {
        ...values.dates,
        startDate: values.dates.startDate.format('DD-MM-YYYY'),
        endDate: values.dates.endDate.format('DD-MM-YYYY'),
      },
    });
  };

  render = () => {
    console.log('object');
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.closeModal}
        contentLabel="Example Modal"
        style={styleModal}
      >
        <div className="ReactModal__Content ReactModal__Content--after-open boss-modal-window boss-modal-window_role_edit">
          <button
            type="button"
            className="boss-modal-window__close-inner"
            onClick={() => this.props.closeModal('edit')}
          />
          <div className="boss-modal-window__header">{this.props.label}</div>
          <div className="boss-modal-window__content">
            <div className="boss-modal-window__form">
              <Form
                validateOnBlur={true}
                onSubmit={this.onSubmit}
                initialValues={{
                  area: this.props.area,
                  type: this.props.options.filter(elem => elem.name === this.props.type)[0],
                  dates: {
                    startDate: moment(this.props.startDate, 'DD-MM-YYYY') || null,
                    endDate: moment(this.props.endDate, 'DD-MM-YYYY') || null,
                  },
                }}
                render={({ handleSubmit, pristine }) => (
                  <form onSubmit={handleSubmit} className="boss-form">
                    <div className="boss-form__row">
                      <Field className="date-range-picker" label="Date" name="dates" component={DateRange} />
                      <Field
                        name="type"
                        label="Holiday Type"
                        component={MySelectModal}
                        isMulti={false}
                        options={this.props.options}
                      />
                    </div>
                    <Field name="area" label="Note" component={InputArea} className="boss-form__textarea" />
                    <div className="boss-form__field">
                      <button className="boss-button boss-form__submit" type="submit" disabled={pristine}>
                        Update
                      </button>
                    </div>
                  </form>
                )}
              />
            </div>
          </div>
        </div>
      </Modal>
    );
  };
}

const mapDispatchToProps = {
  editHoliday: failEditHoliday,
};

export default connect(
  null,
  mapDispatchToProps,
)(ModalForm);
ModalForm.propTypes = {
  label: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  area: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  editHoliday: PropTypes.func.isRequired,
};
