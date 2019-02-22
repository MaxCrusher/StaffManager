import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Holidays extends Component {
  render = () => {
    console.log('+');
    return (
      <div className="boss-page-main__content">
        <div className="boss-page-main__inner">
          <section className="boss-board">
            <header className="boss-board__header">
              <h2 className="boss-board__title">Holidays and holiday requests</h2>
              <div className="boss-board__button-group">
                <p className="boss-button boss-button_role_add">Add Holiday</p>
              </div>
            </header>
            <div className="boss-board__main">
              <div className="boss-board__manager">
                <div className="boss-board__manager-stats boss-board__manager-stats_layout_row">
                  <div className="boss-count boss-count_adjust_row">
                    <div className="boss-count__group">
                      <p className="boss-count__number">6</p>
                      <p className="boss-count__label">Days accured current tax year (Estimated)</p>
                    </div>
                  </div>
                  <div className="boss-count boss-count_adjust_row">
                    <div className="boss-count__group">
                      <p className="boss-count__number">9</p>
                      <p className="boss-count__label">Paid days logged in current tax year</p>
                    </div>
                  </div>
                  <div className="boss-count boss-count_adjust_row">
                    <div className="boss-count__group">
                      <p className="boss-count__number">9</p>
                      <p className="boss-count__label">Unpaid days logged in current tax year</p>
                    </div>
                  </div>
                </div>
                <div className="boss-board__manager-group boss-board__manager-group_role_data">
                  <div className="boss-board__manager-filter">
                    <form action="#" className="boss-form">
                      <div className="boss-form__group boss-form__group_position_last">
                        <h3 className="boss-form__group-title">Filter</h3>
                        <div className="boss-form__row boss-form__row_align_center boss-form__row_desktop boss-form__row_position_last">
                          <div className="boss-form__field boss-form__field_layout_quarter">
                            <label className="boss-form__label">
                              <span className="boss-form__label-text">Type</span>
                            </label>
                            <div className="boss-form__select">select</div>
                          </div>
                          <div className="boss-form__field boss-form__field_layout_max boss-form__field_no-label">
                            <div className="date-range-picker date-range-picker_type_interval-fluid date-range-picker_type_icon date-range-picker_no-label">
                              range-datepicker
                            </div>
                          </div>
                          <div className="boss-form__field boss-form__field_layout_min boss-form__field_no-label">
                            <button className="boss-button boss-form__submit" type="submit">
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="boss-board__manager-table">
                    <div className="boss-table boss-table_page_smp-holiday-requests">
                      <div className="boss-table__row">
                        <div className="boss-table__cell boss-table__cell_role_header">Types</div>
                        <div className="boss-table__cell boss-table__cell_role_header">Status</div>
                        <div className="boss-table__cell boss-table__cell_role_header">Dates</div>
                        <div className="boss-table__cell boss-table__cell_role_header">Note</div>
                        <div className="boss-table__cell boss-table__cell_role_header">Created</div>
                        <div className="boss-table__cell boss-table__cell_role_header">Payslip Date</div>
                        <div className="boss-table__cell boss-table__cell_role_header" />
                      </div>

                      <div className="boss-table__row">
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Types</p>
                            <p className="boss-table__text">Unpaid Holiday</p>
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Status</p>
                            <p className="boss-table__text boss-table__text_role_pending-status">Pending</p>
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Dates</p>
                            <p className="boss-table__text">
                              Tue 15/11/2016 - <br /> Wed 16/11/2016
                            </p>
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Note</p>
                            <p className="boss-table__text" />
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Created</p>
                            <div className="boss-table__info-group">
                              <p className="boss-table__text">
                                <span className="boss-table__text-line">
                                  <span className="boss-table__text-label">Requested: </span>John Doe
                                </span>
                                <span className="boss-table__text-meta">(09:30 Mon 14/11/2016)</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Payslip Date</p>
                            <p className="boss-table__text">20/11/2016</p>
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Action</p>
                            <div className="boss-table__actions">
                              <a
                                href="#"
                                className="boss-button boss-button_type_small boss-button_role_update boss-table__action"
                              >
                                Edit
                              </a>
                              <a
                                href="#"
                                className="boss-button boss-button_type_small boss-button_role_cancel boss-table__action"
                              >
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="boss-table__row">
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Types</p>
                            <p className="boss-table__text">Paid Holiday</p>
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Status</p>
                            <p className="boss-table__text boss-table__text_role_pending-status" />
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Dates</p>
                            <p className="boss-table__text">
                              Thu 17/11/2016 - <br /> Fri 18/11/2016
                            </p>
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Note</p>
                            <p className="boss-table__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Created</p>
                            <p className="boss-table__text boss-table__text_align_center">
                              <span className="boss-table__text-line">Trulla Collier</span>
                              <span className="boss-table__text-meta">(09:30 Mon 14/11/2016)</span>
                            </p>
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Payslip Date</p>
                            <p className="boss-table__text">20/11/2016</p>
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Action</p>
                            <div className="boss-table__actions">
                              <a
                                href="#"
                                className="boss-button boss-button_type_small boss-button_role_update boss-table__action"
                              >
                                Edit
                              </a>
                              <a
                                href="#"
                                className="boss-button boss-button_type_small boss-button_role_cancel boss-table__action"
                              >
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="boss-table__row boss-table__row_state_frozen">
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Types</p>
                            <p className="boss-table__text">Paid Holiday</p>
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Status</p>
                            <p className="boss-table__text boss-table__text_role_pending-status" />
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Dates</p>
                            <p className="boss-table__text">
                              Thu 17/11/2016 - <br /> Fri 18/11/2016
                            </p>
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Note</p>
                            <p className="boss-table__text" />
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Created</p>
                            <p className="boss-table__text boss-table__text_align_center">
                              <span className="boss-table__text-line">Trulla Collier</span>
                              <span className="boss-table__text-meta">(09:30 Mon 14/11/2016)</span>
                            </p>
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Payslip Date</p>
                            <p className="boss-table__text">20/11/2016</p>
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Action</p>
                            <div className="boss-table__actions" />
                          </div>
                        </div>
                      </div>

                      <div className="boss-table__row">
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Types</p>
                            <p className="boss-table__text">Unpaid Holiday</p>
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Status</p>
                            <p className="boss-table__text boss-table__text_role_success-status">Accepted</p>
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Dates</p>
                            <p className="boss-table__text">
                              Tue 15/11/2016 - <br /> Wed 16/11/2016
                            </p>
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Note</p>
                            <p className="boss-table__text" />
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Created</p>
                            <div className="boss-table__info-group">
                              <p className="boss-table__text">
                                <span className="boss-table__text-line">
                                  <span className="boss-table__text-label">Requested: </span>John Doe
                                </span>
                                <span className="boss-table__text-meta">(09:30 Mon 14/11/2016)</span>
                              </p>
                              <p className="boss-table__text">
                                <span className="boss-table__text-line">
                                  <span className="boss-table__text-label">Accepted: </span>Trulla Collier
                                </span>
                                <span className="boss-table__text-meta">(10:30 Mon 14/11/2016)</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Payslip Date</p>
                            <p className="boss-table__text">20/11/2016</p>
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Action</p>
                            <div className="boss-table__actions">
                              <a
                                href="#"
                                className="boss-button boss-button_type_small boss-button_role_cancel boss-table__action"
                              >
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="boss-table__row boss-table__row_state_frozen">
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Types</p>
                            <p className="boss-table__text">Unpaid Holiday</p>
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Status</p>
                            <p className="boss-table__text boss-table__text_role_alert-status">Rejected</p>
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Dates</p>
                            <p className="boss-table__text">
                              Tue 15/11/2016 - <br /> Wed 16/11/2016
                            </p>
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Note</p>
                            <p className="boss-table__text">Lorem ipsum dolor sit amet</p>
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Created</p>
                            <div className="boss-table__info-group">
                              <p className="boss-table__text">
                                <span className="boss-table__text-line">
                                  <span className="boss-table__text-label">Requested: </span>John Doe
                                </span>
                                <span className="boss-table__text-meta">(09:30 Mon 14/11/2016)</span>
                              </p>
                              <p className="boss-table__text">
                                <span className="boss-table__text-line">
                                  <span className="boss-table__text-label">Rejected: </span>Trulla Collier
                                </span>
                                <span className="boss-table__text-meta">(10:30 Mon 14/11/2016)</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Payslip Date</p>
                            <p className="boss-table__text">20/11/2016</p>
                          </div>
                        </div>
                        <div className="boss-table__cell">
                          <div className="boss-table__info">
                            <p className="boss-table__label">Action</p>
                            <div className="boss-table__actions" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="boss-check boss-check_role_panel boss-check_page_smp-holiday-requests">
                      <div className="boss-check__row">
                        <div className="boss-check__cell">
                          <div className="boss-check__status boss-check__status_role_pending">Pending</div>
                        </div>
                      </div>
                      <div className="boss-check__row">
                        <div className="boss-check__cell">
                          <p className="boss-check__title">Unpaid Holiday</p>
                        </div>
                      </div>
                      <div className="boss-check__row">
                        <div className="boss-check__cell">
                          <p className="boss-check__text boss-check__text_role_date-calendar boss-check__text_marked">
                            Tue 15/11/2016 - Wed 16/11/2016
                          </p>
                        </div>
                      </div>
                      <div className="boss-check__row">
                        <div className="boss-check__cell">
                          <div className="boss-check__cell-content">
                            <div className="boss-check__cell-group">
                              <p className="boss-check__text boss-check__text_role_user">
                                <span className="boss-check__text-label">Requested: </span>John Doe
                              </p>
                              <p className="boss-check__text boss-check__text_role_secondary">(09:30 Mon 14/11/2016)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="boss-check__row">
                        <div className="boss-check__cell">
                          <p className="boss-check__text boss-check__text_role_date">
                            <span className="boss-check__text-label">Payslip Date: </span>20/11/2016
                          </p>
                        </div>
                      </div>
                      <div className="boss-check__row boss-check__row_role_actions">
                        <a href="#" className="boss-button boss-button_role_update boss-check__action">
                          Edit
                        </a>
                        <a href="#" className="boss-button boss-button_role_cancel boss-check__action">
                          Delete
                        </a>
                      </div>
                    </div>
                    <div className="boss-check boss-check_role_panel boss-check_page_smp-holiday-requests">
                      <div className="boss-check__row">
                        <div className="boss-check__cell">
                          <p className="boss-check__title boss-check__title_role_payment">Paid Holiday</p>
                        </div>
                      </div>
                      <div className="boss-check__row">
                        <div className="boss-check__cell">
                          <p className="boss-check__text boss-check__text_role_date-calendar boss-check__text_marked">
                            Thu 17/11/2016 - Fri 18/11/2016
                          </p>
                        </div>
                      </div>
                      <div className="boss-check__row">
                        <div className="boss-check__cell">
                          <p className="boss-check__text boss-check__text_role_user">
                            <span className="boss-check__text-label">Created: </span>Trulla Collier
                          </p>
                          <p className="boss-check__text boss-check__text_role_secondary">(09:30 Mon 14/11/2016)</p>
                        </div>
                      </div>
                      <div className="boss-check__row">
                        <div className="boss-check__cell">
                          <div className="boss-check__box">
                            <p className="boss-check__text boss-check__text_role_note">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="boss-check__row">
                        <div className="boss-check__cell">
                          <p className="boss-check__text boss-check__text_role_date">
                            <span className="boss-check__text-label">Payslip Date: </span>20/11/2016
                          </p>
                        </div>
                      </div>
                      <div className="boss-check__row boss-check__row_role_actions">
                        <a href="#" className="boss-button boss-button_role_update boss-check__action">
                          Edit
                        </a>
                        <a href="#" className="boss-button boss-button_role_cancel boss-check__action">
                          Delete
                        </a>
                      </div>
                    </div>
                    <div className="boss-check boss-check_role_panel boss-check_page_smp-holiday-requests boss-check_state_frozen">
                      <div className="boss-check__row">
                        <div className="boss-check__cell">
                          <p className="boss-check__title boss-check__title_role_payment">Paid Holiday</p>
                        </div>
                      </div>
                      <div className="boss-check__row">
                        <div className="boss-check__cell">
                          <p className="boss-check__text boss-check__text_role_date-calendar boss-check__text_marked">
                            Thu 17/11/2016 - Fri 18/11/2016
                          </p>
                        </div>
                      </div>
                      <div className="boss-check__row">
                        <div className="boss-check__cell">
                          <p className="boss-check__text boss-check__text_role_user">
                            <span className="boss-check__text-label">Created: </span>Trulla Collier
                          </p>
                          <p className="boss-check__text boss-check__text_role_secondary">(09:30 Mon 14/11/2016)</p>
                        </div>
                      </div>
                      <div className="boss-check__row">
                        <div className="boss-check__cell">
                          <p className="boss-check__text boss-check__text_role_date">
                            <span className="boss-check__text-label">Payslip Date: </span>20/11/2016
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="boss-check boss-check_role_panel boss-check_page_smp-holiday-requests">
                      <div className="boss-check__row">
                        <div className="boss-check__cell">
                          <div className="boss-check__status boss-check__status_role_success">Accepted</div>
                        </div>
                      </div>
                      <div className="boss-check__row">
                        <div className="boss-check__cell">
                          <p className="boss-check__title">Unpaid Holiday</p>
                        </div>
                      </div>
                      <div className="boss-check__row">
                        <div className="boss-check__cell">
                          <p className="boss-check__text boss-check__text_role_date-calendar boss-check__text_marked">
                            Tue 15/11/2016 - Wed 16/11/2016
                          </p>
                        </div>
                      </div>
                      <div className="boss-check__row">
                        <div className="boss-check__cell">
                          <div className="boss-check__cell-content">
                            <div className="boss-check__cell-group">
                              <p className="boss-check__text boss-check__text_role_user">
                                <span className="boss-check__text-label">Requested: </span>John Doe
                              </p>
                              <p className="boss-check__text boss-check__text_role_secondary">(09:30 Mon 14/11/2016)</p>
                            </div>
                            <div className="boss-check__cell-group">
                              <p className="boss-check__text boss-check__text_role_user">
                                <span className="boss-check__text-label">Accepted: </span>Trulla Collier
                              </p>
                              <p className="boss-check__text boss-check__text_role_secondary">(10:30 Mon 14/11/2016)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="boss-check__row">
                        <div className="boss-check__cell">
                          <p className="boss-check__text boss-check__text_role_date">
                            <span className="boss-check__text-label">Payslip Date: </span>20/11/2016
                          </p>
                        </div>
                      </div>
                      <div className="boss-check__row boss-check__row_role_actions">
                        <a href="#" className="boss-button boss-button_role_cancel boss-check__action">
                          Delete
                        </a>
                      </div>
                    </div>
                    <div className="boss-check boss-check_role_panel boss-check_page_smp-holiday-requests boss-check_state_frozen">
                      <div className="boss-check__row">
                        <div className="boss-check__cell">
                          <div className="boss-check__status boss-check__status_role_alert">Rejected</div>
                        </div>
                      </div>
                      <div className="boss-check__row">
                        <div className="boss-check__cell">
                          <p className="boss-check__title">Unpaid Holiday</p>
                        </div>
                      </div>
                      <div className="boss-check__row">
                        <div className="boss-check__cell">
                          <p className="boss-check__text boss-check__text_role_date-calendar boss-check__text_marked">
                            Tue 15/11/2016 - Wed 16/11/2016
                          </p>
                        </div>
                      </div>
                      <div className="boss-check__row">
                        <div className="boss-check__cell">
                          <div className="boss-check__cell-content">
                            <div className="boss-check__cell-group">
                              <p className="boss-check__text boss-check__text_role_user">
                                <span className="boss-check__text-label">Requested: </span>John Doe
                              </p>
                              <p className="boss-check__text boss-check__text_role_secondary">(09:30 Mon 14/11/2016)</p>
                            </div>
                            <div className="boss-check__cell-group">
                              <p className="boss-check__text boss-check__text_role_user">
                                <span className="boss-check__text-label">Rejected: </span>Trulla Collier
                              </p>
                              <p className="boss-check__text boss-check__text_role_secondary">(10:30 Mon 14/11/2016)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="boss-check__row">
                        <div className="boss-check__cell">
                          <div className="boss-check__box">
                            <p className="boss-check__text boss-check__text_role_note">Lorem ipsum dolor sit amet</p>
                          </div>
                        </div>
                      </div>
                      <div className="boss-check__row">
                        <div className="boss-check__cell">
                          <p className="boss-check__text boss-check__text_role_date">
                            <span className="boss-check__text-label">Payslip Date: </span>20/11/2016
                          </p>
                        </div>
                      </div>
                      <div className="boss-check__row boss-check__row_role_actions" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };
}
export default Holidays;
