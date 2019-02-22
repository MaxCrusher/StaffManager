import * as actions from '../action-type';

const initialState = {
  staffMemberHolidays: [
    {
      id: 1,
      idUser: 519,
      idType: 1,
      idStatus: 1,
      startDate: '11-04-2018',
      endDate: '11-05-2018',
      note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique blanditiis officia non libero.',
      payslipDate: '11-04-2018',
      createDate: '11-03-2018',
      frozen: false,
    },
    {
      id: 2,
      idUser: 566,
      idType: 2,
      idStatus: 2,
      startDate: '12-04-2018',
      endDate: '12-05-2018',
      note:
        'Quam molestias minima doloribus vel in, quas cupiditate, vitae nesciunt veritatis ipsa quod porro neque numquam aperiam?',
      payslipDate: '12-04-2018',
      createDate: '12-03-2018',
      frozen: true,
    },
    {
      id: 3,
      idUser: 647,
      idType: 1,
      idStatus: 3,
      startDate: '13-04-2018',
      endDate: '13-05-2018',
      note: 'Similique blanditiis officia non libero.',
      payslipDate: '13-04-2018',
      createDate: '13-03-2018',
      frozen: false,
    },
  ],
  isLoading: true,
  types: [{ id: 1, name: 'Unpaid Holiday' }, { id: 2, name: 'Paid Holiday' }],
  status: [{ id: 1, name: 'PENDING' }, { id: 2, name: 'ACCEPTED' }, { id: 3, name: 'REJECTED' }],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_RESOLVE_ERROR_DELETE:
      return { ...state, errors: {} };
    default:
      return { ...state };
  }
};
