import React, { Component } from "react";
import axios from "axios";

export default class Check extends Component {
  render() {
    const URL =
      "https://cors-anywhere.herokuapp.com/https://api.hubapi.com/cAPI KEY HERE";

    axios.get(URL).then(res => {
      const properties = res.data.properties;
      let arrayOfStrings = [];
      Object.keys(properties).forEach(key => {
        arrayOfStrings.push(key);
      });
      let id = 2;
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
      console.log(resultObject);
    });
    return <div />;
  }
}
