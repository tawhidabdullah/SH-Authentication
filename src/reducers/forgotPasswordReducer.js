import {
  FORGOT_PASSWORD_SEARCH_START,
  FORGOT_PASSWORD_SEARCH_SUCCESS,
  SEND_VERIFICATION_CODE_START,
  SEND_VERIFICATION_CODE_SUCCESS,
  SEND_VERIFICATION_CODE_FAIL,
  FORGOT_PASSWORD_SEARCH_FAIL,

} from '../actions/types';


const initialState = {
  isLoading: false,
  isUserExists: false,
  isVerificationInCodeCorrect: false,
  userDoesntExist: false
};

const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_SEARCH_START:
      return {
        ...state,
        isLoading: true,
          isUserExists: false,
          userDoesntExist: false
      }
      case FORGOT_PASSWORD_SEARCH_SUCCESS:
        return {
          ...state,
          isLoading: false,
            isUserExists: true,
            userDoesntExist: false
        };
        case FORGOT_PASSWORD_SEARCH_FAIL:
          return {
            ...state,
            isLoading: false,
              isUserExists: false,
              userDoesntExist: true

          };
      case SEND_VERIFICATION_CODE_START:
        return {
          ...state,
          isLoading: true,
          isVerificationInCodeCorrect: false 
        };
      case SEND_VERIFICATION_CODE_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isVerificationInCodeCorrect: false
        };
        case SEND_VERIFICATION_CODE_FAIL:
          return {
            ...state,
            isLoading: false,
              isUserExists: false,
              isVerificationInCodeCorrect: true
          };
      default:
        return state;
  }
}

export default forgotPasswordReducer;