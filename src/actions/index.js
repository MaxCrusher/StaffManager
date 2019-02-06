import * as action from '../action-type';
import logo from './download.jpeg';

const profiles = [
  {
    id: 0,
    img: { logo },
    name: 'Max Orlov',
    modifided: '18:00 Wed 11/16/2016',
    status: 'Enable',
    type: 'Manager',
    masterVenue: 'Black',
    workVenue: 'Mint Green, McCooley',
  },
  {
    id: 1,
    img: { logo },
    name: 'Brian Smith',
    modifided: '18:00 Wed 11/16/2016',
    status: 'Enable',
    type: 'Manager',
    masterVenue: 'White',
    workVenue: 'White, McCooley',
  },
  {
    id: 2,
    img: { logo },
    name: 'Jack McDougal',
    modifided: '11:00 Fri 11/18/2016',
    status: 'Disable',
    type: 'Manager',
    masterVenue: 'Green',
    workVenue: 'Mint Green, McCooley',
  },
];
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 1) {
      resolve(profiles);
    } else {
      reject(new Error('qwer'));
    }
  }, 1000);
});
export const allProfile = () => ({ type: action.ALL_PROFILE });

export const detailProfile = idArg => ({ type: action.DETAIL_PROFILE, id: idArg });

export const failFetchRequest = () => ({ type: action.FAIL_FETCH_REQUEST });

export const failFetchResolve = profilesArg => ({ type: action.FAIL_FETCH_RESOLVE, profilesArg });

export const failFetchResolveError = error => ({ type: action.FAIL_FETCH_RESOLVE_ERROR, error });

export const failFetch = () => dispatch => {
  dispatch(failFetchRequest());
  return promise
    .then(profilesFail => dispatch(failFetchResolve(profilesFail)))
    .catch(error => dispatch(failFetchResolveError(error)));
};
