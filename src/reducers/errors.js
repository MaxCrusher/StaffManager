import * as actions from '../action-type';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_RESOLVE_ERROR_DELETE:
      return { ...state, errors: {} };
    default:
      return { ...state };
  }
};
