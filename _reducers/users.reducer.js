import { userConstants } from "../_constants";

export function users(state = {}, action) {
  //for change state purpose
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    default:
      return state;
  }
}
