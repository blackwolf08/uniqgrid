import { USERDATA, CUSTOMERINFO } from "../actions/types";


const initialState = {
  data: {},
  customerInfo: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USERDATA:
      return {
        ...state,
        data: action.payload
      };
      case CUSTOMERINFO:
        return {
          ...state,
          customerInfo: action.payload
        }
    default:
      return state;
  }
}
