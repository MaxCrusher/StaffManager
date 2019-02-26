import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import ModalForm from '../../../ModalForm';
import { failDeleteHoliday } from '../../../../../../actions';
import { styleModal } from '../../../style';

class ItemRowButton extends Component {
  state = {
    isOpenDelete: false,
    isOpenEdit: false,
  };

  openModal = type => (type === 'edit' ? this.setState({ isOpenEdit: true }) : this.setState({ isOpenDelete: true }));

  closeModal = type =>
    type === 'edit' ? this.setState({ isOpenEdit: false }) : this.setState({ isOpenDelete: false });

  deleteHoliday = () => {
    this.props
      .deleteHoliday(this.props.holiday.id)
      .then(response => this.closeModal)
      .catch(e => console.log(e));
  };

  render = () => {
    if (this.props.holiday.frozen) {
      return (
        <div className="boss-table__cell">
          <div className="boss-table__info">
            <p className="boss-table__label">Action</p>
          </div>
        </div>
      );
    }
    return (
      <div className="boss-table__cell">
        <Modal
          isOpen={this.state.isOpenDelete}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={styleModal}
        >
          <div className="ReactModal__Content ReactModal__Content--after-open boss-modal-window boss-modal-window_role_danger">
            <button type="button" className="boss-modal-window__close" onClick={() => this.closeModal('delete')} />
            <div className="boss-modal-window__header">WARNING !!!</div>
            <div className="boss-modal-window__content">
              <div className="boss-modal-window__message-block">
                <span className="boss-modal-window__message-text">Are You Sure?</span>
              </div>
              <div className="boss-modal-window__actions">
                <button type="button" className="boss-button boss-button_role_cancel" onClick={this.deleteHoliday}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </Modal>
        <ModalForm
          name="edit"
          label="Edit Holiday"
          isOpen={this.state.isOpenEdit}
          closeModal={this.closeModal}
          area={this.props.holiday.note}
          type={this.props.holiday.type}
          startDate={this.props.holiday.startDate}
          endDate={this.props.holiday.endDate}
          id={this.props.holiday.id}
        />
        <div className="boss-table__info">
          <p className="boss-table__label">Action</p>
          <div className="boss-table__actions">
            <a
              className="boss-button boss-button_type_small boss-button_role_update boss-table__action"
              onClick={() => this.openModal('edit')}
            >
              Edit
            </a>
            <a
              className="boss-button boss-button_type_small boss-button_role_cancel boss-table__action"
              onClick={() => this.openModal('delete')}
            >
              Delete
            </a>
          </div>
        </div>
      </div>
    );
  };
}

const mapDispatchToProps = {
  deleteHoliday: failDeleteHoliday,
};

export default connect(
  null,
  mapDispatchToProps,
)(ItemRowButton);
ItemRowButton.propTypes = {
  holiday: PropTypes.object.isRequired,
  deleteHoliday: PropTypes.func.isRequired,
};
