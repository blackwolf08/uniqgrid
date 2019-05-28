import { USERDATA } from './types'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

export const fetchUserData = () => dispatch => {
    const jwt = localStorage.jwtToken;
    const user = jwtDecode(localStorage.jwtToken);
    const userId = user.customerId;
    const URL = `http://localhost:1337/portal.uniqgridcloud.com:8080/api/customer/${userId}/devices?limit=10&textSearch=`;
    const header = `X-Authorization: Bearer ${jwt}`;
    axios.get(URL, { headers: { header } })
    .then((res)=>{
        console.log(res.data.data)
      dispatch({
          type: USERDATA,
          payload: res.data.data
      })
    })
    .catch((error)=>{
      console.log(error)
    });
  };