import * as actions from '../action-type';

const initialState = {
  profiles: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ALL_PROFILE:
      return { ...state };
    case actions.FAIL_FETCH_REQUEST:
      return { ...state };
    case actions.FAIL_FETCH_RESOLVE:
      return { ...state, profiles: action.profilesFail };
    default:
      return { ...state };
  }
};
