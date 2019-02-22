import React, { Component } from 'react';

class RowMin extends Component {
  render = () => {
    console.log('object');
    return (
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
    );
  };
}

export default RowMin;
