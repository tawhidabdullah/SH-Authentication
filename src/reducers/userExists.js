import {
  CHECK_IF_USER_EXISTS_START,
  CHECK_IF_USER_EXISTS_SUCCESS,
  CHECK_IF_USER_EXISTS_FAIL
} from "../actions/types";


const initialState = {
  isLoading: false,
  isExists: false,
}

const userExists = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_IF_USER_EXISTS_START:
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

        case CHECK_IF_USER_EXISTS_FAIL:
          return {
            ...state,
            isLoading: false,
              isExists: false
          }
          default:
            return state;
  }
}


export default userExists;