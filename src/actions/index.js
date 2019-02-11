import * as action from '../action-type';

import { getProfiles, getDetailProfile } from '../servises';

export const detailProfile = idArg => ({ type: action.DETAIL_PROFILE, id: idArg });

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
  dispatch(fetchRequestProfiles());
  return getProfiles
    .then(profilesFail => {
      dispatch(fetchResolveProfiles(profilesFail));
    })
    .catch(error => {
      console.log(error);
      dispatch(fetchResolveError(error));
    });
};
