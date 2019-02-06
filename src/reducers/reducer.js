import * as actions from '../action-type';

const initialState = {
  profiles: [
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
  ],
  nameRow: [
    { id: 0, name: 'img' },
    { id: 1, name: 'Name' },
    { id: 2, name: 'Modified' },
    { id: 3, name: 'Status' },
    { id: 4, name: 'Type' },
    { id: 5, name: 'Master Venue' },
    { id: 6, name: 'Work Venues' },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ALL_PROFILE:
      return { ...state };
    default:
      return { ...state };
  }
};
