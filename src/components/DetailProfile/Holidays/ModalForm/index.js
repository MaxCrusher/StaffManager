import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import moment from 'moment';
import Modal from 'react-modal';
import DateRange from './DateRange';
import { failEditHoliday, addHolidayA } from '../../../../actions';
import { styleModal } from '../style';
import { getTypesAndStatus } from '../../../selector';
import InputArea from './InputArea';
import MySelectModal from './MySelectModal';

class ModalForm extends Component {
  onSubmit = values => {
    if (this.props.name !== 'add') {
      this.props.editHoliday(this.props.id, {
        ...values,
        dates: {
          ...values.dates,
          startDate: values.dates.startDate.format('DD-MM-YYYY'),
          endDate: values.dates.endDate.format('DD-MM-YYYY'),
        },
      });
    } else {
      this.props.addHoliday({
        ...values,
        dates: {
          ...values.dates,
          startDate: values.dates.startDate.format('DD-MM-YYYY'),
          endDate: values.dates.endDate.format('DD-MM-YYYY'),
        },
        idUser: this.props.idUser,
        createDate: moment().format('DD-MM-YYYY'),
      });
    }
  };

  render = () => {
    console.log(this.props.idUser);
    const required = value => !value;
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
                  type:
                    this.props.name === 'add'
                      ? null
                      : this.props.options.typeMas.filter(elem => elem.name === this.props.type)[0],
                  dates: {
                    startDate: this.props.startDate ? moment(this.props.startDate, 'DD-MM-YYYY') : null,
                    endDate: this.props.endDate ? moment(this.props.endDate, 'DD-MM-YYYY') : null,
                  },
                }}
                render={({ handleSubmit, pristine, invalid }) => (
                  <form onSubmit={handleSubmit} className="boss-form">
                    <div className="boss-form__row">
                      <Field className="date-range-picker" label="Date" name="dates" component={DateRange} />
                      <div className="boss-form__field boss-form__field_layout_third">
                        <Field
                          name="type"
                          label="Holiday Type"
                          component={MySelectModal}
                          isMulti={false}
                          options={this.props.options.typeMas}
                        />
                      </div>
                    </div>
                    <Field
                      name="area"
                      validate={required}
                      label="Note"
                      component={InputArea}
                      className="boss-form__textarea"
                    />
                    <div className="boss-form__field">
                      {this.props.name === 'add' ? (
                        <button
                          className="boss-button boss-button_role_add boss-form__submit"
                          type="submit"
                          disabled={pristine || invalid}
                        >
                          Add Holiday
                        </button>
                      ) : (
                        <button className="boss-button boss-form__submit" type="submit" disabled={pristine || invalid}>
                          Update
                        </button>
                      )}
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

const mapStateToProps = state => ({
  options: getTypesAndStatus(state),
});

const mapDispatchToProps = {
  editHoliday: failEditHoliday,
  addHoliday: addHolidayA,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalForm);
ModalForm.propTypes = {
  id: PropTypes.number.isRequired,
  idUser: PropTypes.number.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
  area: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  editHoliday: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  addHoliday: PropTypes.func.isRequired,
};
