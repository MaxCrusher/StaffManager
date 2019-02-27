import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import ModalForm from '../../ModalForm';
import { failDeleteHoliday } from '../../../../../actions';
import { styleModal, displayNone, displayFlex } from '../../style';

class RowMin extends Component {
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

  render = () => (
    <div
      className={
        this.props.holiday.frozen
          ? 'boss-check boss-check_role_panel boss-check_page_smp-holiday-requests boss-check_state_frozen'
          : 'boss-check boss-check_role_panel boss-check_page_smp-holiday-requests'
      }
    >
      <div className="boss-check__row">
        <div className="boss-check__cell">
          <div className="boss-check__status boss-check__status_role_pending">{this.props.holiday.type}</div>
        </div>
      </div>
      <div className="boss-check__row">
        <div className="boss-check__cell">
          <p className="boss-check__title" style={{ color: this.props.holiday.status.color }}>
            {this.props.holiday.status.name}
          </p>
        </div>
      </div>
      <div className="boss-check__row">
        <div className="boss-check__cell">
          <p className="boss-check__text boss-check__text_role_date-calendar boss-check__text_marked">
            {this.props.holiday.startDate} - {this.props.holiday.endDate}
          </p>
        </div>
      </div>
      <div className="boss-check__row">
        <div className="boss-check__cell">
          <div className="boss-check__cell-content">
            <div className="boss-check__cell-group">
              <p className="boss-check__text boss-check__text_role_user">
                <span className="boss-check__text-label">Requested: </span>
                {this.props.holiday.user.firstName.concat(' ', this.props.holiday.user.surname)}
              </p>
              <p className="boss-check__text boss-check__text_role_secondary">{this.props.holiday.createDate}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="boss-check__row">
        <div className="boss-check__cell">
          <p className="boss-check__text boss-check__text_role_date">
            <span className="boss-check__text-label">Payslip Date: </span>
            {this.props.holiday.payslipDate}
          </p>
        </div>
      </div>
      <div
        className="boss-check__row boss-check__row_role_actions"
        style={this.props.holiday.frozen ? displayNone : displayFlex}
      >
        <a
          href="#"
          className="boss-button boss-button_role_update boss-check__action"
          onClick={() => this.openModal('edit')}
        >
          Edit
        </a>
        <a
          href="#"
          className="boss-button boss-button_role_cancel boss-check__action"
          onClick={() => this.openModal('delete')}
        >
          Delete
        </a>
      </div>
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
    </div>
  );
}
const mapDispatchToProps = {
  deleteHoliday: failDeleteHoliday,
};

export default connect(
  null,
  mapDispatchToProps,
)(RowMin);

RowMin.propTypes = {
  holiday: PropTypes.object.isRequired,
  deleteHoliday: PropTypes.func.isRequired,
};
