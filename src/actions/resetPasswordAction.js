import {
  resetPassword
} from "../utilities/signIn";

import {
  RESET_PASSWORD_START,
  RESET_PASSWORD_SUCCESS
} from "./types";




export const resetUserPassword = (passwords, history) => async (dispatch) => {
  dispatch({
    type: RESET_PASSWORD_START
  });
  try {
    await resetPassword(passwords);
    dispatch({
      type: RESET_PASSWORD_SUCCESS
    });
    history.push('/signin')
  } catch (error) {
    console.log('something went wrong when reseting the password')
  }
};