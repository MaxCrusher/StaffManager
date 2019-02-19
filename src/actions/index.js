import * as action from '../action-type';

import { getProfiles, getDetailProfile, postPersonalInfo, postContactInfo, postEmploymentInfo } from '../servises';

export const detailProfile = idArg => ({ type: action.DETAIL_PROFILE, id: idArg });

export const fetchRequestEditPersonalData = () => ({
  type: action.FETCH_REQUEST_EDIT_PERSONAL_DATA,
  isLoading: true,
});

export const fetchRequestEditContactData = () => ({
  type: action.FETCH_REQUEST_EDIT_CONTACT_DATA,
  isLoading: true,
});

export const fetchRequestEditEmploymentData = () => ({
  type: action.FETCH_REQUEST_EDIT_EMPLOYMENT_DATA,
  isLoading: true,
});

export const fetchRequestProfiles = () => ({ type: action.FETCH_REQUEST_PROFILES, isLoading: true });

export const fetchRequestDetailProfile = () => ({ type: action.FETCH_REQUEST_DETAIL_PROFILES, isLoading: true });

export const fetchResolve = () => ({ type: action.FETCH_RESOLVE });

export const fetchResolveProfiles = profilesArg => ({
  type: action.FETCH_RESOLVE_PROFILES,
  isLoading: false,
  profilesArg,
});

export const fetchResolveDetailProfile = detailProfileArg => ({
  type: action.FETCH_RESOLVE_DETAIL_PROFILE,
  isLoading: false,
  detailProfileArg,
});

export const fetchResolveEditPersonalData = personalData => ({
  type: action.FETCH_RESOLVE_EDIT_PERSONAL_DATA,
  isLoading: false,
  personalData,
});

export const fetchResolveEditContactData = contactData => ({
  type: action.FETCH_RESOLVE_EDIT_CONTACT_DATA,
  isLoading: false,
  contactData,
});

export const fetchResolveEditEmploymentData = employmentData => ({
  type: action.FETCH_RESOLVE_EDIT_EMPLOYMENT_DATA,
  isLoading: false,
  employmentData,
});

export const updateStaffMemberInProfiles = personalData => ({
  type: action.UPDATE_STAFF_MEMBER_IN_PROFILES,
  personalData,
});

export const fetchResolveError = error => ({ type: action.FETCH_RESOLVE_ERROR, error });

export const fetchDetailProfile = id => dispatch => {
  dispatch(fetchRequestDetailProfile());
  return getDetailProfile(id)
    .then(detailPro => {
      dispatch(fetchResolveDetailProfile(detailPro));
    })
    .catch(error => dispatch(fetchResolve(error)));
};

export const fetchProfiles = () => dispatch => {
  console.log('taaak');
  dispatch(fetchRequestProfiles());
  return getProfiles()
    .then(profilesFail => {
      dispatch(fetchResolveProfiles(profilesFail));
    })
    .catch(error => {
      console.log(error);
      dispatch(fetchResolveError(error));
    });
};

export const fetchEditPersonalData = (id, data) => dispatch => {
  dispatch(fetchRequestEditPersonalData());
  console.log(id, data);
  return postPersonalInfo(id, data)
    .then(newPersonalData => {
      if (newPersonalData.errors === undefined) {
        dispatch(fetchResolveEditPersonalData(newPersonalData));
        dispatch(updateStaffMemberInProfiles(newPersonalData));
      } else {
        dispatch(fetchResolve(newPersonalData));
      }
    })
    .catch(error => dispatch(fetchResolve(error)));
};

export const fetchEditContactData = (id, data) => dispatch => {
  dispatch(fetchRequestEditContactData());
  console.log(id, data);
  return postContactInfo(id, data)
    .then(newContactData => {
      console.log(newContactData);
      dispatch(fetchResolveEditPersonalData(newContactData));
    })
    .catch(error => dispatch(fetchResolve(error)));
};

export const fetchEditEmploymentData = (id, data) => dispatch => {
  dispatch(fetchRequestEditEmploymentData());
  console.log(id, data);
  return postEmploymentInfo(id, data)
    .then(newEmploymentData => {
      console.log(newEmploymentData);
      dispatch(fetchResolveEditEmploymentData(newEmploymentData));
    })
    .catch(error => dispatch(fetchResolve(error)));
};
