import { combineReducers } from 'redux';
// import appReducer from './appReducer';
import profiles from './profiles';
import detailProfile from './detaitlProfile';

const rootReducer = combineReducers({ profiles, detailProfile });
export default rootReducer;
