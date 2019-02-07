import * as actions from '../action-type';

const initialState = {
  profiles: [],
  numProfiles: 0,
  detailProfile: {
    id: -1,
    img: '',
    employmentDetail: {
      mainVenue: '',
      otherVenue: '',
      jobType: '',
      startDate: '',
      payRate: 'Age ',
      hourPreference: '',
      dayPreference: '',
      nationalInsuranceNumber: '',
      sageId: -1,
      statusStatement: '',
    },
    accountDetail: {
      created: '',
      status: '',
      user: '',
      applicationPassword: '',
      idScanner: '',
    },
    personalDetail: {
      name: '',
      gender: '',
      dateOfBirth: '',
    },
    contactDetail: {
      email: '',
      phone: '',
      address: {
        street: '',
        numHouse: 0,
        state: '',
        city: '',
        index: '',
      },
    },
    mobileApp: {
      lastEntry: '',
    },
  },
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ALL_PROFILE:
      return { ...state };
    case actions.FAIL_FETCH_REQUEST:
      return { ...state };
    case actions.FAIL_FETCH_RESOLVE_PROFILES:
      return { ...state, profiles: action.profilesArg, numProfiles: action.profilesArg.length };
    case actions.FAIL_FETCH_RESOLVE_ERROR:
      return { ...state, profiles: [], numProfiles: 0 };
    case actions.FAIL_FETCH_RESOLVE_DETAIL_PROFILE:
      return { ...state, detailProfile: action.detailProfileArg };
    default:
      return { ...state };
  }
};
