import * as actions from '../action-type';

const initialState = {
  profiles: {
    staffMembers: [],
    staffTypes: [],
    venues: [],
  },
  numProfiles: 0,
  isLoading: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ALL_PROFILE:
      return { ...state, fetch: action.req };
    case actions.FAIL_FETCH_RESOLVE_PROFILES:
      return {
        ...state,
        profiles: action.profilesArg,
        numProfiles: action.profilesArg.staffMembers.length,
        isLoading: false,
      };
    case actions.FAIL_FETCH_RESOLVE_ERROR:
      return { ...state, profiles: [], numProfiles: 0, isLoading: false, detailProfile: [] };
    default:
      return { ...state };
  }
};
