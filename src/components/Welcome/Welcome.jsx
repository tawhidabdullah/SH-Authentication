import React from 'react';
import Logo from "../img-comp/Logo";

const Welcome = () => {
  return (
    <div class="welcome">
      <div class="welcome__head">
        <Logo />
        <h1 class="welcome__head__title">
          Welcome to Shobhobe!
      </h1>
      </div>
      <div class="welcome__foot">
        <p class="welcome__foot__description">
          Press below to unlock your dashboard
      </p>
        <a href='#' class="welcome__foot-addorder-btn">+ Add Order</a>
        <p class="welcome__foot__text">
          Change Store Info
      </p>
      </div>
    </div>
  )
}

export default Welcome; 
