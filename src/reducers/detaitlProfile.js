import * as actions from '../action-type';

const initialState = {
  staffMember: {
    otherVenueIds: [],
  },
  venues: [],
  payRates: [],
  staffTypes: [],
  genderValues: [],
  isLoading: true,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_REQUEST_DETAIL_PROFILES:
      return { ...state, isLoading: action.isLoading };
    case actions.FETCH_RESOLVE_DETAIL_PROFILE:
      return {
        ...state,
        staffMember: action.detailProfileArg.staffMember,
        staffTypes: action.detailProfileArg.staffTypes,
        venues: action.detailProfileArg.venues,
        payRates: action.detailProfileArg.payRates,
        genderValues: action.detailProfileArg.genderValue,
        isLoading: action.isLoading,
      };
    case actions.FETCH_RESOLVE_EDIT_CONTACT_DATA:
      return {
        ...state,
        staffMember: {
          address: action.contactData.address,
          postcode: action.contactData.postcode,
          country: action.contactData.country,
          county: action.contactData.county,
          phone: action.contactData.phoneNumber,
          email: action.contactData.emailAddress,
        },
      };
    case actions.FETCH_REQUEST_EDIT_PERSONAL_DATA:
      return { ...state, isLoading: action.isLoading };
    case actions.FETCH_RESOLVE_EDIT_PERSONAL_DATA: {
      console.log(action.personalData);
      return { ...state, staffMember: action.personalData, isLoading: action.isLoading };
    }
    default:
      return { ...state };
  }
};
