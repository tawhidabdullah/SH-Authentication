import {
  REGISTERING_USER_START,
  REGISTERING_USER_SUCCESS,
  SIGNIN_USER_START,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_SUCCESS__FAILD,
  LOGOUT_USER
} from '../actions/types'

const initialState = {
  users: [{
    mobile: '12345678910',
    password: 'shobhobe'
  }],
  user: {
    mobile: '12345678910',
    password: 'shobhobe'
  },
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
          users: [...state.users, action.payload],
            isLoading: false,
            isErrorWhenAuthenticating: false,
            isAuthenticated: true
        };
      case SIGNIN_USER_START:
        return {
          ...state,
          users: [...state.users, action.payload],
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
              isAuthenticated: false
            }
            default:
              return state;
  }
}


export default authReducer;