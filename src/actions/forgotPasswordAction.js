import {
  getUserIfExists,
  verificationCode
} from "../utilities/signIn";

import {
  FORGOT_PASSWORD_SEARCH_START,
  FORGOT_PASSWORD_SEARCH_SUCCESS,
  SEND_VERIFICATION_CODE_START,
  SEND_VERIFICATION_CODE_SUCCESS
} from "./types";




export const forgetPasswordSearchAction = (userdata, history) => async (dispatch) => {
  dispatch({
    type: SEND_VERIFICATION_CODE_START
  });
  try {
    await getUserIfExists(userdata);
    dispatch({
      type: SEND_VERIFICATION_CODE_SUCCESS
    });
    history.push('/forgot-password-recive-code')
  } catch (error) {
    console.log('something went wrong when checking the user exists in the database who wants to forget password')
  }
};



export const SendVerificationCodeAction = (codes, history) => async (dispatch) => {
  dispatch({
    type: FORGOT_PASSWORD_SEARCH_START
  });
  try {
    await verificationCode(codes);
    dispatch({
      type: FORGOT_PASSWORD_SEARCH_SUCCESS
    });
    history.push('/reset-password')
  } catch (error) {
    console.log('Something went wrong with verification code')
  }
};