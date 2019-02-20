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
  isLoadingForm: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_REQUEST_DETAIL_PROFILES:
      return { ...state, isLoading: action.isLoading };
    case actions.FETCH_REQUEST_EDIT_CONTACT_DATA:
      return { ...state, isLoadingForm: action.isLoading };
    case actions.FETCH_REQUEST_EDIT_EMPLOYMENT_DATA:
      return { ...state, isLoadingForm: action.isLoading };
    case actions.FETCH_REQUEST_EDIT_PERSONAL_DATA:
      return { ...state, isLoadingForm: action.isLoading };
    case actions.FETCH_RESOLVE_DETAIL_PROFILE:
      return {
        ...state,
        staffMember: action.detailProfileArg.staffMember,
        staffTypes: action.detailProfileArg.staffTypes,
        venues: action.detailProfileArg.venues,
        payRates: action.detailProfileArg.payRates,
        genderValues: action.detailProfileArg.genderValues,
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
        isLoadingForm: action.isLoadingForm,
      };
    case actions.FETCH_RESOLVE_EDIT_EMPLOYMENT_DATA:
      return {
        ...state,
        staffMember: {
          ...state.staffMember,
          mainVenueId: action.employmentData.masterVenueId,
          otherVenueIds: action.employmentData.otherVenueIds,
          staffTypeId: action.employmentData.staffTypeId,
          startsAt: action.employmentData.startsAt,
          payRateId: action.employmentData.payRateId,
          dayPreferenceNote: action.employmentData.dayPreferenceNote,
          hoursPreferenceNote: action.employmentData.hoursPreferenceNote,
          nationalInsuranceNumber: action.employmentData.nationalInsuranceNumber,
          sageId: action.employmentData.sageId,
          statusStatement: action.employmentData.statusStatement,
        },
        isLoadingForm: action.isLoadingForm,
      };
    case actions.FETCH_RESOLVE_EDIT_PERSONAL_DATA:
      return { ...state, staffMember: action.personalData, isLoadingForm: action.isLoadingForm };
    case actions.FETCH_RESOLVE_ERROR:
      return { ...state, errors: action.error, isLoadingForm: action.isLoadingForm, isLoading: action.isLoading };
    default:
      return { ...state };
  }
};
