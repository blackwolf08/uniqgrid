import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';
import currentUser from './currentUser';
import error from './error';
import userdata from './userDataReducer'

export default combineReducers({
    currentUser,
    fetch: fetchReducer,
    error,
    userdata
});