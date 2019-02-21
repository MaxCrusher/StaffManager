import * as actions from '../action-type';

const initialState = {
  profiles: {
    staffMembers: [],
    staffTypes: [],
    venues: [],
  },
  numProfiles: 0,
  isLoading: true,
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
    case actions.UPDATE_STAFF_MEMBER_IN_PROFILES_PERSONAL:
      return {
        ...state,
        profiles: {
          ...state.profiles,
          staffMembers: [
            ...state.profiles.staffMembers.map(elem => {
              if (elem.id === action.personalData.id) {
                return {
                  ...elem,
                  firstName: action.personalData.firstName,
                  surname: action.personalData.surname,
                  gender: action.personalData.gender,
                  dateOfBirth: action.personalData.dateOfBirth,
                };
              }
              return elem;
            }),
          ],
        },
      };
    case actions.UPDATE_STAFF_MEMBER_IN_PROFILES_EMPLOYMENT:
      return {
        ...state,
        profiles: {
          ...state.profiles,
          staffMembers: [
            ...state.profiles.staffMembers.map(elem => {
              if (elem.id === action.employmentData.id) {
                return {
                  ...elem,
                  masterVenueId: action.employmentData.masterVenueId,
                };
              }
              return elem;
            }),
          ],
        },
      };
    default:
      return { ...state };
  }
};
