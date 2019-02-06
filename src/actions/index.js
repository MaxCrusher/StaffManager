import * as action from '../action-type';

export const allProfile = () => ({ type: action.ALL_PROFILE });
export const detailProfile = idArg => ({ type: action.DETAIL_PROFILE, id: idArg });
