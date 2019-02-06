import * as actions from '../action-type';

const initialState = {
  profiles: [],
  numProfiles: 0,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ALL_PROFILE:
      return { ...state };
    case actions.FAIL_FETCH_REQUEST:
      return { ...state };
    case actions.FAIL_FETCH_RESOLVE:
      return { ...state, profiles: action.profilesArg, numProfiles: action.profilesArg.length };
    case actions.FAIL_FETCH_RESOLVE_ERROR:
      return { ...state, profiles: [], numProfiles: 0 };
    default:
      return { ...state };
  }
};
