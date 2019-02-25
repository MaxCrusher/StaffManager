import * as action from '../action-type';

import {
  getProfiles,
  getDetailProfile,
  postPersonalInfo,
  postContactInfo,
  postEmploymentInfo,
  fetchGetHolidays,
  fetchDeleteHoliday,
} from '../servises';

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

export const fetchRequestGetHolidays = idArg => ({ type: action.FETCH_REQUEST_HOLIDAYS, id: idArg, isLoading: true });

export const fetchRequestDeleteHoliday = () => ({
  type: action.FETCH_REQUEST_DELETE_HOLIDAY,
  isLoading: true,
});

export const fetchRequestDetailProfile = () => ({ type: action.FETCH_REQUEST_DETAIL_PROFILES, isLoading: true });

export const fetchResolve = () => ({ type: action.FETCH_RESOLVE });

export const fetchResolveError = error => ({
  type: action.FETCH_RESOLVE_ERROR,
  error,
  isLoading: false,
  isLoadingForm: false,
});

export const fetchResolveErrorDelete = () => ({ type: action.FETCH_RESOLVE_ERROR });

export const fetchResolveHolidays = holidaysArg => ({
  type: action.FETCH_RESOLVE_HOLIDAYS,
  isLoading: false,
  holidaysArg,
});

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
  isLoadingForm: false,
  personalData,
});

export const fetchResolveEditContactData = contactData => ({
  type: action.FETCH_RESOLVE_EDIT_CONTACT_DATA,
  isLoadingForm: false,
  contactData,
});

export const fetchResolveEditEmploymentData = employmentData => ({
  type: action.FETCH_RESOLVE_EDIT_EMPLOYMENT_DATA,
  isLoadingForm: false,
  employmentData,
});

export const fetchResolveDeleteHoliday = idArg => ({
  type: action.FETCH_RESOLVE_DELETE_HOLIDAY,
  isLoading: false,
  id: idArg,
});

export const updateStaffMemberInProfilesPersonal = personalData => ({
  type: action.UPDATE_STAFF_MEMBER_IN_PROFILES_PERSONAL,
  personalData,
});

export const updateStaffMemberInProfilesEmployment = employmentData => ({
  type: action.UPDATE_STAFF_MEMBER_IN_PROFILES_EMPLOYMENT,
  employmentData,
});

export const updateHolidaysIsLoading = () => ({
  type: action.UPDATE_HOLIDAYS_IS_LOADING,
});

export const fetchDetailProfile = id => dispatch => {
  dispatch(fetchRequestDetailProfile());
  return getDetailProfile(id)
    .then(response => {
      dispatch(fetchResolveDetailProfile(response.data));
      return response.data;
    })
    .catch(error => {
      dispatch(fetchResolve(error));
      throw error;
    });
};

export const fetchProfiles = () => dispatch => {
  dispatch(fetchRequestProfiles());
  return getProfiles()
    .then(response => {
      dispatch(fetchResolveProfiles(response.data));
      return response.data;
    })
    .catch(error => {
      dispatch(fetchResolveError(error));
      throw error;
    });
};

export const fetchEditPersonalData = (id, data) => dispatch => {
  dispatch(fetchRequestEditPersonalData());
  return postPersonalInfo(id, data)
    .then(response => {
      dispatch(fetchResolveEditPersonalData(response.data));
      dispatch(updateStaffMemberInProfilesPersonal(response.data));
      dispatch(fetchResolveErrorDelete());
      return response.data;
    })
    .catch(error => {
      dispatch(fetchResolveError());
      throw error;
    });
};

export const fetchEditContactData = (id, data) => dispatch => {
  dispatch(fetchRequestEditContactData());
  return postContactInfo(id, data)
    .then(response => {
      dispatch(fetchResolveEditPersonalData(response.data));
      return response.data;
    })
    .catch(error => {
      dispatch(fetchResolveError());
      throw error;
    });
};

export const fetchEditEmploymentData = (id, data) => dispatch => {
  dispatch(fetchRequestEditEmploymentData());
  console.log(id, data);
  return postEmploymentInfo(id, data)
    .then(response => {
      dispatch(fetchResolveEditEmploymentData(response.data));
      dispatch(updateStaffMemberInProfilesEmployment(response.data));
      return response.data;
    })
    .catch(error => {
      dispatch(fetchResolveError());
      throw error;
    });
};

export const failFetchGetHolidays = () => dispatch => {
  dispatch(fetchRequestGetHolidays());
  return fetchGetHolidays()
    .then(response => {
      dispatch(fetchResolveHolidays(response));
      return response;
    })
    .catch(error => {
      dispatch(fetchResolveError());
      throw error;
    });
};

export const failDeleteHoliday = id => dispatch => {
  dispatch(fetchRequestDeleteHoliday());
  return fetchDeleteHoliday(id)
    .then(response => {
      dispatch(fetchResolveDeleteHoliday(response));
      return response;
    })
    .catch(error => {
      dispatch(fetchResolveErrorDelete());
      throw error;
    });
};
