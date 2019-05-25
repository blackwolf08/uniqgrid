import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import jwtDecode from "jwt-decode";
import { setAuthorizationToken, setCurrentUser } from "./actions/auth";
import Login from "./components/Login";

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch {
    store.dispatch(setCurrentUser({}));
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Login />
      </Router>
    </Provider>
  );
}

export default App;
