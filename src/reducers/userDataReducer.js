import { USERDATA } from "../actions/types";

const initialState = {
  data: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USERDATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
