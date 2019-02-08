import * as actions from '../action-type';

const initialState = {
  detailProfile: {
    staffMember: {
      otherVenueIds: [],
    },
    venues: [],
    payRates: [],
    staffTypes: [],
  },
  isLoading: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FAIL_FETCH_RESOLVE_DETAIL_PROFILE:
      return { ...state, detailProfile: action.detailProfileArg, isLoading: false };
    default:
      return { ...state };
  }
};
