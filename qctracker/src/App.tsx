import React from 'react';

import './App.css';
import { Landing } from './component/landing/Landing'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { LoginPage } from './pages/loginPage'
import { RegisterPage } from './pages/registerPage'




function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </Router>
  );
}

export default App;



