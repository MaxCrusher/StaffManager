// import { createSelector } from 'reselect';

export const allProfile = state => state.reducer.profiles;
export const nameRows = state => state.reducer.nameRow;
console.log(allProfile, nameRows);
/* export const getProfile = createSelector(
  allProfile,
  nameRows,
  (namerows, profiles) => namerows.map(row => ({ ...row,  })),
);  */
