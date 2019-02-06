import * as action from '../action-type';

const profiles = [
  {
    id: 0,
    name: 'max',
    modifided: '0',
    status: 'enable',
    type: 'manager',
    masterVenue: 'black',
    workVenue: 'Mint Green, McCooley',
  },
  {
    id: 1,
    name: 'max1',
    modifided: '1',
    status: 'enable',
    type: 'manager1',
    masterVenue: 'white',
    workVenue: 'White, McCooley',
  },
  {
    id: 2,
    name: 'max2',
    modifided: '2',
    status: 'disable',
    type: 'manager2',
    masterVenue: 'green',
    workVenue: 'Mint Green, McCooley',
  },
];
const promise = new Promise(resolve => {
  setTimeout(() => resolve(profiles), 2000);
});
export const allProfile = () => ({ type: action.ALL_PROFILE });
export const detailProfile = idArg => ({ type: action.DETAIL_PROFILE, id: idArg });
export const failFetchRequest = () => ({ type: action.FAIL_FETCH_REQUEST });
export const failFetch = () => dispatch => {
  dispatch(failFetchRequest);
  return promise.then(profilesFail => dispatch({ type: action.FAIL_FETCH_RESOLVE, profilesFail }));
};
