import React from 'react';
import './landing.scss';
import { Register } from './register/Register';
import logo from '../../REVAJUDGE.png';
import Login from './login/Login';

export const Landing: React.FC = () => {

  return (
    <body>
      <div className="landingButtonsPanel inline">

        <img className="imgLandingLogo" alt="logo" src={logo} />
        <Register />
        <Login />

      </div>

    </body>
  )
}

/**


 */