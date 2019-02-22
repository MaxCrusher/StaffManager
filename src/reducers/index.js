import { combineReducers } from 'redux';
import profiles from './profiles';
import detailProfile from './detaitlProfile';
import holiday from './holidays';

const rootReducer = combineReducers({ profiles, detailProfile, holiday });
export default rootReducer;
