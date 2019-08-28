import {
  RESET_PASSWORD_START,
  RESET_PASSWORD_SUCCESS
} from '../actions/types';


const initialState = {
  isLoading: false,
  isPasswordReseted: false
};

const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD_START:
      return {
        ...state,
        isLoading: true,
          isPasswordReseted: false
      }
      case RESET_PASSWORD_SUCCESS:
        return {
          ...state,
          isLoading: false,
            isPasswordReseted: true
        };
      default:
        return state;
  }
}

export default resetPasswordReducer;