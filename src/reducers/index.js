import { combineReducers } from 'redux';
import currentUser from './currentUser';
import error from './error';
import userdata from './userDataReducer'

export default combineReducers({
    currentUser,
    error,
    userdata
});