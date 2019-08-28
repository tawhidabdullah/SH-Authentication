import {
  CHECK_IF_USER_EXISTS,
  CHECK_IF_USER_EXISTS_SUCCESS
} from "../actions/types";


const initialState = {
  isLoading: false,
  isExists: false,
}

const userExists = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_IF_USER_EXISTS:
      return {
        ...state,
        isLoading: true,
          isExists: false
      }
      case CHECK_IF_USER_EXISTS_SUCCESS:
        return {
          ...state,
          isLoading: false,
            isExists: true
        }
        default:
          return state;
  }
}


export default userExists;