import * as action from '../action-type';

import { getProfiles, getDetailProfile } from '../servises';

export const detailProfile = idArg => ({ type: action.DETAIL_PROFILE, id: idArg });

export const failFetchRequest = () => ({ type: action.FAIL_FETCH_REQUEST });

export const failFetchResolve = () => ({ type: action.FAIL_FETCH_RESOLVE });

export const failFetchResolveProfiles = profilesArg => ({
  type: action.FAIL_FETCH_RESOLVE_PROFILES,
  profilesArg,
});

export const failFetchResolveDetailProfile = detailProfileArg => ({
  type: action.FAIL_FETCH_RESOLVE_DETAIL_PROFILE,
  detailProfileArg,
});

export const failFetchResolveError = error => ({ type: action.FAIL_FETCH_RESOLVE_ERROR, error });

export const failFetchDetailProfile = id => dispatch => {
  dispatch(failFetchRequest());
  return getDetailProfile(id)
    .then(detailPro => {
      dispatch(failFetchResolveDetailProfile(detailPro));
      dispatch(failFetchResolve());
    })
    .catch(error => dispatch(failFetchResolve(error)));
};

export const failFetchProfiles = () => dispatch => {
  dispatch(failFetchRequest());
  return getProfiles
    .then(profilesFail => {
      dispatch(failFetchResolveProfiles(profilesFail));
      dispatch(failFetchResolve());
    })
    .catch(error => {
      console.log(error);
      dispatch(failFetchResolveError(error));
    });
};
