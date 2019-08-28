import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

// IMPORT REDUX STORE
import store from "../store";

// COMPONENTS
import SignIn from "../components/auth/SignIn.jsx";
import SignUp from "../components/auth/SignUp";
import Header from '../components/Header/Header';
import Welcome from "../components/Welcome/Welcome";
import ForgotPasswordSearch from "../components/ForgotPassword/ForgotPasswordSearch";
import ForgotPasswordReciveCode from "../components/ForgotPassword/ForgotPasswordReciveCode";
import ResetPassword from "../components/ForgotPassword/ResetPassword";
import SignInSignUp from "../components/signIn-signup/SignInSignUp";


// IMPORT PRIVATE ROUTE
import PrivateRoute from "../utilities/privateRoute";


// IMPORT CSS
import "./App.css";



const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Switch>
        <Route exact path='/'
          component={SignInSignUp} />
            <PrivateRoute
              exact
              path="/welcome"
              component={Welcome}
            />
        <Route exact path="/signin"
          component={SignIn} />
        <Route exact path="/signup"
          component={SignUp} />

        <Route exact path="/forgot-password"
          component={ForgotPasswordSearch} />
        <Route exact path='/forgot-password-recive-code'
          component={ForgotPasswordReciveCode} />
        <Route exact path='/reset-password'
          component={ResetPassword} />
      </Switch>
    </Provider>
  );
}

export default App;
