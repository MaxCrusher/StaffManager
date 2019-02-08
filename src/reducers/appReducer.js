import * as actions from '../action-type';

const initialState = {
  isLoading: true,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FAIL_FETCH_REQUEST:
      return { ...state, isLoading: true };
    case actions.FAIL_FETCH_RESOLVE:
      return { ...state, isLoading: false };
    default:
      return { ...state };
  }
};
