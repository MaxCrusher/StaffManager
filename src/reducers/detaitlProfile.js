import * as actions from '../action-type';

const initialState = {
  detailProfile: {
    staffMember: {
      otherVenueIds: [],
    },
    venues: [],
    payRates: [],
    staffTypes: [],
    isLoading: false,
  },
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_REQUEST_DETAIL_PROFILES:
      return { ...state, isLoading: action.isLoading };
    case actions.FETCH_RESOLVE_DETAIL_PROFILE:
      return { ...state, detailProfile: action.detailProfileArg, isLoading: action.isLoading };
    default:
      return { ...state };
  }
};
