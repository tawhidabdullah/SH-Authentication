// actions is tough to understand
//Actions must have a type
import axios from "axios";
import jwt_decode from "jwt-decode";
import {
  signIn,
  signUp,
  getUserIfExists
} from "../utilities/signIn";

// import setAuthorizationToken
import setAuthorizationToken from "../utilities/setAuthorizationToken";

// import TYPES
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  CHECK_IF_USER_EXISTS,
  CHECK_IF_USER_EXISTS_SUCCESS,
  REGISTERING_USER_START,
  REGISTERING_USER_SUCCESS,
  SIGNIN_USER_START,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_SUCCESS__FAILD
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































// when registeruser action get's called uporer function ta fired kore

// Login - Get user token //////////////////////////////////////
export const loginUser = (userdata) => (dispatch) => {
  axios
    .post("/api/users/login", userdata)
    .then(res => {
      const {
        token
      } = res.data; // get token from res.data
      localStorage.setItem("jwttoken", token); //save to localstorage
      setAuthorizationToken(token); // set Authorization token  to header
      const decoded = jwt_decode(token); // decode token to get user data
      dispatch(setCurrentUser(decoded)); // set current user
    })
    .catch(errors => {
      dispatch({
        type: GET_ERRORS,
        payload: errors.response.data
      });
    });
};

// Log out User

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("jwttoken"); // remove the token from localStorage
  setAuthorizationToken(false); // remove Authorization header 
  //set currentUser to empty object=>which will set isAuthenticate to false
  dispatch(setCurrentUser({}));
};

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};