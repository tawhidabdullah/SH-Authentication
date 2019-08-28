import {
  FORGOT_PASSWORD_SEARCH_START,
  FORGOT_PASSWORD_SEARCH_SUCCESS,
  SEND_VERIFICATION_CODE_START,
  SEND_VERIFICATION_CODE_SUCCESS

} from '../actions/types';


const initialState = {
  isLoading: false,
  isUserExists: false,
  isVerificationCodeCorrect: false
};

const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_SEARCH_START:
      return {
        ...state,
        isLoading: true,
          isUserExists: false
      }
      case FORGOT_PASSWORD_SEARCH_SUCCESS:
        return {
          ...state,
          isLoading: false,
            isUserExists: true
        };
      case SEND_VERIFICATION_CODE_START:
        return {
          ...state,
          isLoading: false,
            isVerificationCodeCorrect: false
        };
      case SEND_VERIFICATION_CODE_SUCCESS:
        return {
          ...state,
          isLoading: false,
            isVerificationCodeCorrect: true
        };
      default:
        return state;
  }
}

export default forgotPasswordReducer;