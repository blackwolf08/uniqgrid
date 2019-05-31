import axios from "axios";
import { FETCH_CONNECTION_INFO } from "./types";

export const fetchConnetionInfo = id => dispatch => {
  return new Promise((resolve, reject) => {
    if (id > 1) {
      const URL =
        "https://cors-anywhere.herokuapp.com/https://api.hubapi.com/contacts/v1/contact/email/demo@uniqgrid.com/profile?hapikey=bdcec428-e806-47ec-b7fd-ece8b03a870b";

      axios.get(URL).then(res => {
        const properties = res.data.properties;
        let arrayOfStrings = [];
        console.log("from action");
        Object.keys(properties).forEach(key => {
          arrayOfStrings.push(key);
        });
        let result = [];
        let resultObject = {};
        arrayOfStrings.forEach(subString => {
          if (subString.includes(id)) {
            result.push(subString);
          }
        });
        let temp;
        result.forEach(key => {
          temp = key.split("_");
          temp = temp.join(" ");
          resultObject[temp] = properties[key];
        });
        dispatch({
          type: FETCH_CONNECTION_INFO,
          payload: resultObject
        });
        resolve(true);
      });
    } else {
      const URL =
        "https://cors-anywhere.herokuapp.com/https://api.hubapi.com/contacts/v1/contact/email/demo@uniqgrid.com/profile?hapikey=bdcec428-e806-47ec-b7fd-ece8b03a870b";

      axios.get(URL).then(res => {
        console.log(res);
        const properties = res.data.properties;
        let arrayOfStrings = [];
        Object.keys(properties).forEach(key => {
          arrayOfStrings.push(key);
        });
        let result = [];
        let resultObject = {};
        arrayOfStrings.forEach(subString => {
          if (!/\d/.test(subString)) {
            result.push(subString);
          }
        });
        let temp;
        result.forEach(key => {
          temp = key.split("_");
          temp = temp.join(" ");
          resultObject[temp] = properties[key];
        });
        dispatch({
          type: FETCH_CONNECTION_INFO,
          payload: resultObject
        });
        resolve(true);
      });
    }
  });
};
