import {
  REGISTERING_USER_START,
  REGISTERING_USER_SUCCESS,
  SIGNIN_USER_START,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_SUCCESS__FAILD,
  LOGOUT_USER,
  REGISTERING_USER_FAIL
} from '../actions/types'

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  isErrorWhenAuthenticating: false
}

// reducer will take 2 argument => actions , initial state

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTERING_USER_START:
      return {
        ...state,
        isLoading: true,
          isErrorWhenAuthenticating: false
      }
      case REGISTERING_USER_SUCCESS:
        return {
          ...state,
            isLoading: false,
            isErrorWhenAuthenticating: false,
            isAuthenticated: true
        };
        case REGISTERING_USER_FAIL:
          return {
            ...state,
              isLoading: false,
              isErrorWhenAuthenticating: true,
              isAuthenticated: false
          };
      case SIGNIN_USER_START:
        return {
          ...state,
            isLoading: true,
            isAuthenticated: false,
            isErrorWhenAuthenticating: false
        };
      case SIGNIN_USER_SUCCESS:
        return {
          ...state,
          isLoading: false,
            isAuthenticated: true,
            isErrorWhenAuthenticating: false
        }
        case SIGNIN_USER_SUCCESS__FAILD:
          return {
            ...state,
            isLoading: false,
              isAuthenticated: true,
              isErrorWhenAuthenticating: true
          }
          case LOGOUT_USER:
            return {
              ...state,
              isAuthenticated: false,
              isLoading: false
            }
            default:
              return state;
  }
}


export default authReducer;