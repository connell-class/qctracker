import React from 'react';
import { useSelector } from 'react-redux';
import { IState, IlandingButtonsState } from '../redux/reducers';
import './landing.scss';
import { LoginButton } from './login/Login Button';
import { RegisterButton } from './register/Register Button';
import { Register } from './register/Register';
import { Login } from './login/Login';
import logo from '../../resources/Rev Social.png';
export const Landing: React.FC = () => {
  
  const buttons = useSelector<IState, IlandingButtonsState>(state => state.landingButtonState);
  
  return (
    <body>
      <div className = "landingButtonsPanel inline">
  
        
    
     
        <img className = "imgLandingLogo" alt = "logo" src = {logo}/>
        { buttons.showRegister && <Register/>}
        { buttons.showLogin && <Login/>}
        </div>
  
    </body>
  )
}

/**
 
   
 */