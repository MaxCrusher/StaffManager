import { combineReducers } from 'redux';
import profiles from './profiles';
import detailProfile from './detaitlProfile';
import errors from './errors';

const rootReducer = combineReducers({ profiles, detailProfile, errors });
export default rootReducer;
