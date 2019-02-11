import { combineReducers } from 'redux';
import profiles from './profiles';
import detailProfile from './detaitlProfile';

const rootReducer = combineReducers({ profiles, detailProfile });
export default rootReducer;
