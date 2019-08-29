import {
  signIn,
  signUp,
  getUserIfExists
} from "../utilities/signIn";

// import setAuthorizationToken
import setAuthorizationToken from "../utilities/setAuthorizationToken";

// import TYPES
import {
  CHECK_IF_USER_EXISTS,
  CHECK_IF_USER_EXISTS_SUCCESS,
  REGISTERING_USER_START,
  REGISTERING_USER_SUCCESS,
  SIGNIN_USER_START,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_SUCCESS__FAILD,
  LOGOUT_USER
} from "./types";

export const checkIfUserExists = (userdata, history) => async (dispatch) => {
  dispatch({
    type: CHECK_IF_USER_EXISTS
  });
  try {
    await getUserIfExists(userdata);
    dispatch({
      type: CHECK_IF_USER_EXISTS_SUCCESS
    });
    history.push('/signin')
  } catch (error) {
    const userNotFoundSignUp = {
      pathname: '/signup',
      state: {
        isUserNotFound: true
      }
    };
    history.push(userNotFoundSignUp);
    console.log('something went wrong when checking the user if exist')
  }
};


// Register user
export const signUpUser = (userdata, history) => async (dispatch) => {
  dispatch({
    type: REGISTERING_USER_START
  });
  console.log('se', userdata);
  try {
    await signUp(userdata);
    dispatch({
      type: REGISTERING_USER_SUCCESS,
      payload: userdata
    });
    history.push('/welcome')
  } catch (error) {
    console.log('something went wrong when registering the user')
  }
};



// Register user
export const signInUser = (userdata, history) => async (dispatch) => {
  dispatch({
    type: SIGNIN_USER_START
  });
  try {
    await signIn(userdata);
    dispatch({
      type: SIGNIN_USER_SUCCESS,
      payload: userdata
    });

    history.push('/welcome')
  } catch (error) {
    dispatch({
      type: SIGNIN_USER_SUCCESS__FAILD
    });
    console.log('Invalid user name or password')
  }
};


// Log out User

export const logoutUser = (history) => (dispatch) => {
  dispatch({
    type: LOGOUT_USER
  });
  history.push('/')
};