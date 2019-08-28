import {
  combineReducers
} from "redux";

import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import userExistsReducer from "./userExists";
import forgotPasswordReducer from "./forgotPasswordReducer";
import resetPasswordReducer from "./resetPasswordReducer";


export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  userExists: userExistsReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer
});