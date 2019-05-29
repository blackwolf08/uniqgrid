import { apiCall, setTokenHeader } from "../services/api";
import { SET_CURRENT_USER, ERROR } from "../actions/types";

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function setAuthorizationToken(token) {
  setTokenHeader(token);
}

export function logout() {
  return dispatch => {
    localStorage.clear();
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export function authUser(type, userData) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      return apiCall(
        "post",
        "http://portal.uniqgridcloud.com:8080/api/auth/login",
        userData
      )
        .then(async ({ token, ...user }) => {
          
          localStorage.setItem("jwtToken", token);
          setAuthorizationToken(token);
          dispatch(setCurrentUser(user));
          resolve();
        })
        .catch(err => {
          dispatch({
            type: ERROR,
            payload: "Invaild Email/Password"
          });
        });
    });
  };
}
