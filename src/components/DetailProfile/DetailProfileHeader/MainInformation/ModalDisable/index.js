import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import Modal from 'react-modal';
import { styleModal } from '../../../Holidays/style';
import InputArea from '../../../Holidays/ModalForm/InputArea';

class ModalDisable extends Component {
  onSubmit = values => {
    console.log(values);
  };

  render = () => {
    const required = value => !value;
    console.log('d');
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={() => this.props.closeModal}
        contentLabel="Example Modal"
        style={styleModal}
      >
        <div className="ReactModal__Content ReactModal__Content--after-open boss-modal-window boss-modal-window_role_edit">
          <button type="button" className="boss-modal-window__close-inner" onClick={this.props.closeModal} />
          <div className="boss-modal-window__header">Disable Staff Member</div>
          <div className="boss-modal-window__content">
            <div className="boss-modal-window__form">
              <Form
                validateOnBlur={true}
                onSubmit={this.onSubmit}
                initialValues={{
                  area: '',
                  check: false,
                }}
                render={({ handleSubmit, pristine, invalid }) => (
                  <form onSubmit={handleSubmit} className="boss-form">
                    <div className="boss-form__field">
                      <label className="boss-form__checkbox-label">
                        <Field name="check" className="boss-form__checkbox-input" component="input" type="checkbox" />
                        <span className="boss-form__checkbox-label-text">
                          {' '}
                          Do not rehire this person (Give reason below)
                        </span>
                      </label>
                    </div>
                    <Field
                      name="area"
                      validate={required}
                      label="Reason for disabling*"
                      component={InputArea}
                      className="boss-form__textarea"
                    />
                    <div className="boss-form__field">
                      <button
                        className="boss-button boss-button_role_block boss-form__submit"
                        type="submit"
                        disabled={pristine || invalid}
                      >
                        Disable
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

export default ModalDisable;
ModalDisable.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
