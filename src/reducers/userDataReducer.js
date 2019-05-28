import { USERDATA, CUSTOMERINFO, DEVICETYPES } from "../actions/types";


const initialState = {
  data: {},
  customerInfo: {},
  deviceTypes: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DEVICETYPES:
      return {
        ...state,
        deviceTypes: action.payload
      }
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
