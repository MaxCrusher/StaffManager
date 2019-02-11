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
    case actions.FETCH_REQUEST_PROFILES:
      return { ...state, isLoading: action.isLoading };
    case actions.FETCH_RESOLVE_PROFILES:
      return {
        ...state,
        profiles: action.profilesArg,
        numProfiles: action.profilesArg.staffMembers.length,
        isLoading: action.isLoading,
      };
    case actions.FETCH_RESOLVE_ERROR:
      return { ...state, profiles: [], numProfiles: 0, detailProfile: [] };
    default:
      return { ...state };
  }
};
